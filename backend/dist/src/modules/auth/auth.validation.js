import { z } from "zod";
export const registerSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(100),
    email: z
        .email({ error: "Invalid email address" })
        .trim()
        .transform((value) => value.toLowerCase()),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(100),
});
export const loginSchema = z.object({
    email: z
        .email({ error: "Invalid email address" })
        .trim()
        .transform((value) => value.toLowerCase()),
    password: z.string().min(1, "Password is required"),
});
export const refreshTokenSchema = z.object({
    refreshToken: z.string().min(1),
});
//# sourceMappingURL=auth.validation.js.map