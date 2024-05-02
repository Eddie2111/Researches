import { z } from 'zod';

export const userSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name length too small, more than 2 required" })
    .max(32, { message: "name length too big, less than 32 required" }),
  email: z
    .string()
    .min(11, { message: "email length too small, more than 2 required" })
    .max(35, { message: "email length too big, less than 32 required" }),
  username: z
    .string()
    .min(5, { message: "username length too small, more than 2 required" })
    .max(20, { message: "username length too big, less than 32 required" }),
});
