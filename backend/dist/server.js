import app from "./app.js";
import { env } from "./config/env.js";
const server = app.listen(env.PORT, () => {
    console.log(`
╔══════════════════════════════════════╗
║       AI-SPACE BACKEND               ║
║                                      ║
║  Environment : ${env.NODE_ENV.padEnd(21)}║
║  Port        : ${String(env.PORT).padEnd(21)}║
║  Status      : RUNNING               ║
╚══════════════════════════════════════╝
  `);
});
const shutdown = async (signal) => {
    console.log(`${signal} received. Shutting down...`);
    server.close(() => {
        console.log("HTTP server closed.");
        process.exit(0);
    });
};
process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
//# sourceMappingURL=server.js.map