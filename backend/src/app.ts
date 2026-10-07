import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";
import { rateLimit } from "express-rate-limit";

import { env } from "./config/env.js";

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

app.disable("x-powered-by");

app.use(helmet());

const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message:
      "Too many authentication attempts. Please try again later.",
  },
});

app.use(
  cors({
    origin: env.CORS_ORIGIN,
    credentials: true,
  }),
);

app.use(express.json({ limit: "1mb" }));

app.use(
  express.urlencoded({
    extended: true,
    limit: "1mb",
  }),
);

app.use(cookieParser());

app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "AI-Space API is healthy",
    timestamp: new Date().toISOString(),
  });
});
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/auth/login", authRateLimiter);

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

export default app;
