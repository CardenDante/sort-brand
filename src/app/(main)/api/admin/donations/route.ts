import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyToken, getTokenFromRequest } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const token = await getTokenFromRequest(request);
    if (!token || !(await verifyToken(token))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const offset = (page - 1) * limit;

    // Optional filters
    const search = searchParams.get("search") || "";

    let sql = "SELECT * FROM donations WHERE 1=1";
    const args: any[] = [];

    if (search) {
      sql += " AND (name LIKE ? OR phone LIKE ? OR message LIKE ?)";
      const pattern = `%${search}%`;
      args.push(pattern, pattern, pattern);
    }

    sql += " ORDER BY created_at DESC LIMIT ? OFFSET ?";
    args.push(limit, offset);

    const [rowsResult, countResult] = await Promise.all([
      db.execute({ sql, args }),
      db.execute({
        sql: "SELECT COUNT(*) as total FROM donations",
        args: [],
      }),
    ]);

    const total = (countResult.rows[0] as any).total;

    return NextResponse.json({
      donations: rowsResult.rows,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1,
      },
    });
  } catch (error) {
    console.error("❌ Admin donations fetch error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
