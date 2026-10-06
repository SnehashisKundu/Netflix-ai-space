import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./modules/auth/auth.routes.js";
import titleRoutes from "./modules/title/title.routes.js";
import watchSpaceRoutes from "./modules/watch-space/ws.routes.js";
import chatRoutes from "./modules/chat/chat.routes.js";
import timelineRoutes from "./modules/timeline/tl.routes.js";
import variationRoutes from "./modules/variation/vr.routes.js";
import interactionRoutes from "./modules/interaction/int.routes.js";
import qaRoutes from "./modules/qa/qa.routes.js";
import recommendationRoutes from "./modules/recommendation/rec.routes.js";
import dashboardRoutes from "./modules/dashboard/dash.routes.js";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/titles", titleRoutes);
app.use("/watch-spaces", watchSpaceRoutes);
app.use("/chat", chatRoutes);
app.use("/titles", timelineRoutes);
app.use("/", variationRoutes);
app.use("/", interactionRoutes);
app.use("/", qaRoutes);
app.use("/recommendations", recommendationRoutes);
app.use("/dashboard", dashboardRoutes);

app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "AI-Space API is healthy",
    timestamp: new Date().toISOString(),
  });
});

export default app;
