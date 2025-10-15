import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// Generate base64 for Lipa Na Mpesa password
function generatePassword(shortcode: string, passkey: string, timestamp: string) {
  return Buffer.from(shortcode + passkey + timestamp).toString("base64");
}

// Get current timestamp in required format
function getTimestamp() {
  const date = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    date.getFullYear().toString() +
    pad(date.getMonth() + 1) +
    pad(date.getDate()) +
    pad(date.getHours()) +
    pad(date.getMinutes()) +
    pad(date.getSeconds())
  );
}

// Generate Mpesa access token
async function getAccessToken() {
  const consumerKey = process.env.MPESA_CONSUMER_KEY!;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET!;

  const credentials = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");
  const url =
    process.env.MPESA_ENV === "production"
      ? "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
      : "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";

  const response = await fetch(url, {
    headers: { Authorization: `Basic ${credentials}` },
  });

  if (!response.ok) {
    throw new Error("Failed to generate Mpesa access token");
  }

  const data = await response.json();
  return data.access_token;
}

// POST /api/donations
export async function POST(request: NextRequest) {
  try {
    const { name, phone, amount, message } = await request.json();

    if (!name || !phone || !amount) {
      return NextResponse.json(
        { error: "Name, phone, and amount are required" },
        { status: 400 }
      );
    }

    // Normalize phone (Safaricom format)
    let normalizedPhone = phone.trim();
    if (normalizedPhone.startsWith("0")) {
      normalizedPhone = normalizedPhone.replace(/^0/, "254");
    } else if (normalizedPhone.startsWith("+")) {
      normalizedPhone = normalizedPhone.replace("+", "");
    }

    // Insert pending donation into DB
    const insert = await db.execute({
      sql: `INSERT INTO donations (name, phone, amount, message, status)
            VALUES (?, ?, ?, ?, 'pending')`,
      args: [name, normalizedPhone, amount, message || ""],
    });

    const donationId = Number(insert.lastInsertRowid);

    // Prepare Mpesa STK Push payload
    const timestamp = getTimestamp();
    const password = generatePassword(
      process.env.MPESA_SHORTCODE!,
      process.env.MPESA_PASSKEY!,
      timestamp
    );

    const payload = {
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: normalizedPhone,
      PartyB: process.env.MPESA_SHORTCODE,
      PhoneNumber: normalizedPhone,
      CallBackURL: process.env.MPESA_CALLBACK_URL,
      AccountReference: `DON-${donationId}`,
      TransactionDesc: message || "SortBloom Donation",
    };

    const token = await getAccessToken();

    const stkUrl =
      process.env.MPESA_ENV === "production"
        ? "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
        : "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

    const response = await fetch(stkUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    console.log("Mpesa STK response:", data);

    if (!data.CheckoutRequestID) {
      return NextResponse.json(
        { error: "Failed to initiate Mpesa STK Push", details: data },
        { status: 400 }
      );
    }

    // Update donation record
    await db.execute({
      sql: `UPDATE donations SET mpesa_checkout_id = ? WHERE id = ?`,
      args: [data.CheckoutRequestID, donationId],
    });

    return NextResponse.json(
      {
        message: "STK push initiated successfully. Check your phone to complete payment.",
        donationId,
        checkoutId: data.CheckoutRequestID,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Mpesa Donation Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
