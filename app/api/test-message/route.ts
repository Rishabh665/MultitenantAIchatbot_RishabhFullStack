import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db/connectDB";
import { Message } from "@/lib/models/Message";

export async function GET() {
  await connectDB();

  const message = await Message.create({
    projectId: "demo-project",
    sender: "user",
    text: "Hello MongoDB",
  });

  return NextResponse.json({
    success: true,
    data: message,
  });
}