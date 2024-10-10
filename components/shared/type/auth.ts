import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z
    .string({ message: "Enter your mail" })
    .email({ message: "Enter your mail" }),
  password: z
    .string({ message: "Enter your password" })
    .min(3, { message: "short password" }),
});

export type LoginInput = z.infer<typeof loginValidationSchema>;
