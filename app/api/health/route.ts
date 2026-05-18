import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/connectDB";

export async function GET() {
    await connectDB();
  return NextResponse.json({
    success: true,
    message: "Server is healthy",
  });
}