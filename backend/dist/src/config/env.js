import "dotenv/config";
const requiredEnv = [
    "DATABASE_URL",
    "JWT_ACCESS_SECRET",
    "GEMINI_API_KEY",
];
for (const key of requiredEnv) {
    if (!process.env[key]) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
}
export const env = {
    NODE_ENV: process.env.NODE_ENV ?? "development",
    PORT: Number(process.env.PORT ?? 5000),
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
    REDIS_URL: process.env.REDIS_URL ?? "redis://localhost:6381",
    CORS_ORIGIN: process.env.CORS_ORIGIN ?? "http://localhost:5173",
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    GEMINI_PRIMARY_MODEL: process.env.GEMINI_PRIMARY_MODEL ?? "gemini-3.8-flash",
    GEMINI_FALLBACK_MODEL: process.env.GEMINI_FALLBACK_MODEL ?? "gemini-3.7-flash",
};
//# sourceMappingURL=env.js.map