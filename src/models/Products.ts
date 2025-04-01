import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  image: string;
  category: "refinishedFurniture" | "fauxConfectionery";
  price: number;
  approved: boolean; // New field for approval status
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    approved: { type: Boolean, default: false }, // New field definition
  },
  { timestamps: true }
);

// Prevent model overwrite in development
export default mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
