// src/app/api/admin/contacts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import type { InValue, Row } from '@libsql/client';
import { verifyToken, getTokenFromRequest } from '@/lib/auth';

// Never let a CDN/router cache an admin listing — stale caches were part of
// why the dashboard could keep showing empty results after new submissions.
export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
    const page = Math.max(1, parseInt(searchParams.get('page') || '1') || 1);
    const limit = Math.min(
      100,
      Math.max(1, parseInt(searchParams.get('limit') || '10') || 10)
    );
    const search = searchParams.get('search') || '';
    const unreadOnly = searchParams.get('unread') === 'true';

    const offset = (page - 1) * limit;

    // Build query
    let sql = `SELECT * FROM contacts WHERE 1=1`;
    let countSql = `SELECT COUNT(*) as total FROM contacts WHERE 1=1`;
    const args: InValue[] = [];
    const countArgs: InValue[] = [];

    if (search) {
      sql += ` AND (name LIKE ? OR email LIKE ? OR subject LIKE ? OR message LIKE ?)`;
      countSql += ` AND (name LIKE ? OR email LIKE ? OR subject LIKE ? OR message LIKE ?)`;
      const searchPattern = `%${search}%`;
      args.push(searchPattern, searchPattern, searchPattern, searchPattern);
      countArgs.push(searchPattern, searchPattern, searchPattern, searchPattern);
    }

    if (unreadOnly) {
      sql += ` AND (read_status IS NULL OR read_status = 0)`;
      countSql += ` AND (read_status IS NULL OR read_status = 0)`;
    }

    sql += ` ORDER BY created_at DESC, id DESC LIMIT ? OFFSET ?`;
    args.push(limit, offset);

    // Execute queries
    const [contactsResult, countResult, statsResult] = await Promise.all([
      db.execute({ sql, args }),
      db.execute({ sql: countSql, args: countArgs }),
      // Unfiltered totals so the stat tiles describe the whole table, not the
      // 10 rows on the current page.
      db.execute(
        `SELECT COUNT(*) as total,
                SUM(CASE WHEN read_status IS NULL OR read_status = 0 THEN 0 ELSE 1 END) as read_count
         FROM contacts`
      ),
    ]);

    const contacts = contactsResult.rows;
    // libsql can hand back BigInt for COUNT(); Number() keeps it JSON-safe
    // (a BigInt here throws during serialisation and surfaced as a 500).
    const total = Number((countResult.rows[0] as Row | undefined)?.total ?? 0);
    const totalPages = Math.ceil(total / limit);

    const statsTotal = Number((statsResult.rows[0] as Row | undefined)?.total ?? 0);
    const statsRead = Number((statsResult.rows[0] as Row | undefined)?.read_count ?? 0);

    return NextResponse.json(
      {
        contacts,
        stats: {
          total: statsTotal,
          read: statsRead,
          unread: statsTotal - statsRead,
        },
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1,
        },
      },
      { headers: { 'Cache-Control': 'no-store' } }
    );

  } catch (error) {
    console.error('Get contacts error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
