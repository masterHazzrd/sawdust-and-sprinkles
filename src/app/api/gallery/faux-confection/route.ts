import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    // Build the full path to the FauxConfectionImages folder
    const imagesDir = path.join(process.cwd(), "public", "FauxConfectionImages");
    // Read the directory contents
    const files = await fs.readdir(imagesDir);
    // Filter for common image extensions (adjust regex as needed)
    const images = files.filter((file) => /\.(jpg|jpeg|png|gif|svg)$/i.test(file));
    // Map each file to its public URL path
    const imagePaths = images.map((file) => `/FauxConfectionImages/${file}`);
    
    return NextResponse.json({ success: true, images: imagePaths });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
