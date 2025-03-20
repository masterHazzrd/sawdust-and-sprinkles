import mongoose, { Schema, Document } from "mongoose";

export interface IReview extends Document {
  email: string;
  message: string;
  approved: boolean;
}

const ReviewSchema: Schema<IReview> = new Schema(
  {
    email: { type: String, required: true },
    message: { type: String, required: true },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Prevent model overwrite in development
export default mongoose.models.Review || mongoose.model<IReview>("Review", ReviewSchema);
