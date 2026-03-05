import { createApp } from "../server/_core/index";
import { Readable } from "stream";

// 缓存 Express 应用实例
let appInstance: Awaited<ReturnType<typeof createApp>>;

// 初始化应用实例
async function getApp() {
  if (!appInstance) {
    appInstance = await createApp();
  }
  return appInstance;
}

// Vercel Node.js 函数处理程序
export default async function handler(req: any, res: any) {
  const app = await getApp();
  
  // 调用 Express 应用处理请求
  app(req, res);
}

