import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3, { message: "Вывеите причину" }),
});

export type LoginInput = z.infer<typeof loginValidationSchema>;
