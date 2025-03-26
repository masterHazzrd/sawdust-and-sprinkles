import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/mongodb";
import Product from "@/models/Products";

export async function GET() {
  try {
    await connectToDatabase();
    const products = await Product.find({});
    return NextResponse.json({ success: true, products });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    // Convert price to a number (if provided as string)
    if (body.price) {
      body.price = Number(body.price);
    }

    const product = await Product.create(body);
    return NextResponse.json({ success: true, product });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
