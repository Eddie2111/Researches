import mongoose, {
  Document,
  Schema,
} from 'mongoose';
import { z } from 'zod';

export interface IUser extends Document {
  name: string;
  email: string;
  userId: string;
}

const userModel: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 12,
      maxlength: 35,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 5,
      maxlength: 20,
      match: /^[a-zA-Z0-9_-]+$/,
    },
  },
  { timestamps: true }
);

export const userSchema = z.object({
  name: z
    .string()
    .min(2, { message: "length too small, more than 2 required" })
    .max(32, { message: "length too big, less than 32 required" }),
  email: z
    .string()
    .min(11, { message: "length too small, more than 2 required" })
    .max(35, { message: "length too big, less than 32 required" }),
  userId: z
    .string()
    .min(5, { message: "length too small, more than 2 required" })
    .max(20, { message: "length too big, less than 32 required" }),
});

export const User = mongoose.model<IUser>("User", userModel);
