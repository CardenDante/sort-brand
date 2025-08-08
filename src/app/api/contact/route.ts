// Update src/app/api/contact/route.ts - Fix timezone storage
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Name, email, subject, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create UTC timestamp explicitly
    const utcTimestamp = new Date().toISOString();
    console.log('Storing UTC timestamp:', utcTimestamp);

    // Insert into database with explicit UTC timestamp
    const result = await db.execute({
      sql: `INSERT INTO contacts (name, email, phone, subject, message, created_at) 
            VALUES (?, ?, ?, ?, ?, ?)`,
      args: [name, email, phone || '', subject, message, utcTimestamp]
    });

    return NextResponse.json(
      { message: 'Contact form submitted successfully', id: Number(result.lastInsertRowid) },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}