import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

// 创建 Express 应用实例
export async function createApp() {
  const app = express();
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
    const server = createServer(app);
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  return app;
}

// 用于本地开发启动服务器
async function startServer() {
  const app = await createApp();
  const server = createServer(app);
  // In Vercel, PORT is provided by the environment
  const port = parseInt(process.env.PORT || "3000");

  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// 如果直接运行此文件，则启动服务器
if (import.meta.url === `file://${process.argv[1]}`) {
  startServer().catch(console.error);
}
