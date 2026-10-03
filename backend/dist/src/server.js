import app from "./app.js";
import { env } from "./config/env.js";
import { initializeSocket } from "./socket/socket.server.js";
const server = app.listen(env.PORT, () => {
    console.log(`
=========================================
        AI-SPACE BACKEND
=========================================
Environment : ${env.NODE_ENV}
Port        : ${env.PORT}
Status      : RUNNING
=========================================
  `);
});
initializeSocket(server);
//# sourceMappingURL=server.js.map