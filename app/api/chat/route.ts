import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/db/connectDB";
import { processChat } from "@/lib/services/chatService";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const result = await processChat({
      projectId: "demo-project",
      userMessage: body.message,
    });

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}