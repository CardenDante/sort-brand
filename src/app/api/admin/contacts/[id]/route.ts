// src/app/api/admin/contacts/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { verifyToken, getTokenFromRequest } from '@/lib/auth';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Await params in newer Next.js versions
    const { id } = await params;

    // Verify authentication
    const token = await getTokenFromRequest(request);
    if (!token) {
      return NextResponse.json(
        { error: 'No authorization token provided' },
        { status: 401 }
      );
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { read_status } = body;

    if (typeof read_status !== 'boolean') {
      return NextResponse.json(
        { error: 'read_status must be a boolean' },
        { status: 400 }
      );
    }

    await db.execute({
      sql: `UPDATE contacts SET read_status = ? WHERE id = ?`,
      args: [read_status, id]
    });

    return NextResponse.json({ message: 'Contact updated successfully' });

  } catch (error) {
    console.error('Update contact error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Await params in newer Next.js versions
    const { id } = await params;

    // Verify authentication
    const token = await getTokenFromRequest(request);
    if (!token) {
      return NextResponse.json(
        { error: 'No authorization token provided' },
        { status: 401 }
      );
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    await db.execute({
      sql: `DELETE FROM contacts WHERE id = ?`,
      args: [id]
    });

    return NextResponse.json({ message: 'Contact deleted successfully' });

  } catch (error) {
    console.error('Delete contact error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Await params in newer Next.js versions
    const { id } = await params;

    // Verify authentication
    const token = await getTokenFromRequest(request);
    if (!token) {
      return NextResponse.json(
        { error: 'No authorization token provided' },
        { status: 401 }
      );
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    const result = await db.execute({
      sql: `SELECT * FROM contacts WHERE id = ?`,
      args: [id]
    });

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ contact: result.rows[0] });

  } catch (error) {
    console.error('Get contact error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}