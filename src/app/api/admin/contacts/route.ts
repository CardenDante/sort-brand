// src/app/api/admin/contacts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { verifyToken, getTokenFromRequest } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
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

    // Get query parameters for pagination and filtering
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const unreadOnly = searchParams.get('unread') === 'true';

    const offset = (page - 1) * limit;

    // Build query
    let sql = `SELECT * FROM contacts WHERE 1=1`;
    let countSql = `SELECT COUNT(*) as total FROM contacts WHERE 1=1`;
    const args: any[] = [];
    const countArgs: any[] = [];

    if (search) {
      sql += ` AND (name LIKE ? OR email LIKE ? OR subject LIKE ? OR message LIKE ?)`;
      countSql += ` AND (name LIKE ? OR email LIKE ? OR subject LIKE ? OR message LIKE ?)`;
      const searchPattern = `%${search}%`;
      args.push(searchPattern, searchPattern, searchPattern, searchPattern);
      countArgs.push(searchPattern, searchPattern, searchPattern, searchPattern);
    }

    if (unreadOnly) {
      sql += ` AND read_status = FALSE`;
      countSql += ` AND read_status = FALSE`;
    }

    sql += ` ORDER BY created_at DESC LIMIT ? OFFSET ?`;
    args.push(limit, offset);

    // Execute queries
    const [contactsResult, countResult] = await Promise.all([
      db.execute({ sql, args }),
      db.execute({ sql: countSql, args: countArgs })
    ]);

    const contacts = contactsResult.rows;
    const total = (countResult.rows[0] as any).total;
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      contacts,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}