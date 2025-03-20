import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/mongoDB"; // Make sure you create this utility in your utils folder.
import Review from "@/models/Review"; // Ensure you have a Review model defined in your models folder.

export async function GET() {
  try {
    await connectToDatabase();
    // Fetch reviews from the database (adjust filtering as needed)
    const reviews = await Review.find({});
    return NextResponse.json({ success: true, reviews });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
