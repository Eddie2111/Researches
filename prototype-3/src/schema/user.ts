import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(2, { message: "length too small, more than 2 required" })
    .max(32, { message: "length too big, less than 32 required" }),
  email: z
    .string()
    .min(11, { message: "length too small, more than 2 required" })
    .max(35, { message: "length too big, less than 32 required" }),
  username: z
    .string()
    .min(5, { message: "length too small, more than 2 required" })
    .max(20, { message: "length too big, less than 32 required" }),
});
