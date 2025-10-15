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

    // Get paginated results
    const result = await db.execute({
      sql: "SELECT * FROM join_requests ORDER BY created_at DESC LIMIT ? OFFSET ?",
      args: [limit, offset],
    });

    // Get total count safely
    const countResult = await db.execute("SELECT COUNT(*) as total FROM join_requests");
    const totalRaw = (countResult.rows[0] as any).total;
    const total = Number(totalRaw); // ✅ convert to real number

    // Return paginated response
    return NextResponse.json({
      joinRequests: result.rows,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: page * limit < total,
        hasPrev: page > 1,
      },
    });
  } catch (e) {
    console.error("❌ GET /api/admin/join error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
