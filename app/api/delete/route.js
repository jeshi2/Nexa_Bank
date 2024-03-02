import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Message from "../../components/models/contact"; 

export async function POST(req) {
  const { type, messageId } = await req.json();

  try {
    await connectDB();

    if (type === "deleteMessage") {
      const message = await Message.findByIdAndDelete(messageId);
      if (!message) {
        return NextResponse.json({
          msg: ["Message not found"],
          success: false,
        });
      }
      

      return NextResponse.json({
        msg: ["Message deleted successfully"],
        success: true,
      });
    }
  } catch (error) {
    return NextResponse.json({
      msg: ["Failed to delete the message"],
      success: false,
    });
  }
}
