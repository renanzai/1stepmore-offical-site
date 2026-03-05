import "dotenv/config";
import express from "express";
import { createServer } from "http";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

function tryListen(
  server: ReturnType<typeof createServer>,
  port: number,
  maxPort: number
): Promise<number> {
  return new Promise((resolve, reject) => {
    const onError = (err: NodeJS.ErrnoException) => {
      if (err.code === "EADDRINUSE" && port < maxPort) {
        server.removeListener("error", onError);
        resolve(tryListen(server, port + 1, maxPort));
      } else {
        reject(err);
      }
    };
    server.on("error", onError);
    server.listen(port, "0.0.0.0", () => {
      server.removeListener("error", onError);
      resolve(port);
    });
  });
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  const isDevelopment = process.env.NODE_ENV === "development" || !process.env.NODE_ENV;
  if (isDevelopment) {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const actualPort = await tryListen(server, preferredPort, preferredPort + 20);
  console.log(`Server running on http://0.0.0.0:${actualPort}/`);
}

startServer().catch(console.error);
