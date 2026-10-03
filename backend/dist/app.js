import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./modules/auth/auth.routes";
const app = express();
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use("/auth", authRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/health", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "AI-Space API is healthy",
        timestamp: new Date().toISOString(),
    });
});
export default app;
//# sourceMappingURL=app.js.map