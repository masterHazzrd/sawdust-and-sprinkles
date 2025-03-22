import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/mongodb"; // Create this helper if you haven't already.
import Contact from "@/models/Contact"; // Ensure you have a Contact model defined in your models folder.

export async function GET() {
  try {
    await connectToDatabase();
    // Fetch contact messages from the database (modify query if needed)
    const messages = await Contact.find({});
    return NextResponse.json({ success: true, messages });
  } catch (error: never) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
