import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, join_type, message } = body;

    // Validation
    if (!name || !email || !join_type) {
      return NextResponse.json(
        { error: "Name, email, and join type are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Insert into DB
    const result = await db.execute({
      sql: `
        INSERT INTO join_requests (name, email, join_type, message)
        VALUES (?, ?, ?, ?)
      `,
      args: [name, email, join_type, message || ""],
    });

    return NextResponse.json(
      {
        message: "Join request submitted successfully!",
        id: Number(result.lastInsertRowid),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Join form submission error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
