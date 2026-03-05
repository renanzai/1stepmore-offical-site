import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "../server/_core/oauth";
import { appRouter } from "../server/routers";
import { createContext } from "../server/_core/context";
import path from "path";

// 创建 Express 应用实例
const app = express();

// 配置 body parser 以处理较大的文件上传
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// OAuth 回调路由
registerOAuthRoutes(app);

// tRPC API 路由
app.use(
  "/api/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

// 静态文件服务
app.use(express.static(path.join(process.cwd(), "dist", "public")));

// 处理所有其他请求，返回 index.html（用于 React 路由）
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist", "public", "index.html"));
});

// 导出 Vercel Serverless 函数
export default app;


