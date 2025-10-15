import { NextResponse } from "next/server";
import { runMigrations } from "@/lib/migrate";

export async function GET() {
  try {
    await runMigrations();
    return NextResponse.json({ message: "✅ Migrations completed successfully" });
  } catch (err) {
    console.error("Migration error:", err);
    return NextResponse.json({ error: "Migration failed" }, { status: 500 });
  }
}
