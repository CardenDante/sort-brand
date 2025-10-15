import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Mpesa callback:", JSON.stringify(body, null, 2));

    const resultCode = body?.Body?.stkCallback?.ResultCode;
    const checkoutId = body?.Body?.stkCallback?.CheckoutRequestID;

    if (resultCode === 0) {
      const metadata = body.Body.stkCallback.CallbackMetadata?.Item || [];
      const receipt = metadata.find((i: any) => i.Name === "MpesaReceiptNumber")?.Value;

      await db.execute({
        sql: `UPDATE donations SET status = 'paid', mpesa_receipt = ? WHERE mpesa_checkout_id = ?`,
        args: [receipt || "unknown", checkoutId],
      });

      console.log("✅ Donation updated successfully.");
    } else {
      await db.execute({
        sql: `UPDATE donations SET status = 'failed' WHERE mpesa_checkout_id = ?`,
        args: [checkoutId],
      });
      console.warn("❌ Mpesa payment failed or cancelled.");
    }

    return NextResponse.json({ message: "Callback processed" }, { status: 200 });
  } catch (error) {
    console.error("Callback error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
