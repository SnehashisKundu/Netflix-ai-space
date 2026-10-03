import "dotenv/config";
const requiredEnv = [
    "DATABASE_URL",
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
    REDIS_URL: process.env.REDIS_URL ?? "redis://localhost:6381",
    CORS_ORIGIN: process.env.CORS_ORIGIN ?? "http://localhost:5173",
};
//# sourceMappingURL=env.js.map