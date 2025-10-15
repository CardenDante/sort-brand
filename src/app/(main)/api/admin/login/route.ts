// src/app/api/admin/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createToken } from '@/lib/auth';

const ADMIN_EMAIL = 'sortbrandske@gmail.com';
const ADMIN_PASSWORD = 'S3CUR3+sortbrandske!';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const token = await createToken(email);
      
      return NextResponse.json(
        { 
          message: 'Login successful',
          token,
          user: { email: ADMIN_EMAIL }
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}