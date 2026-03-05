import { createApp } from "../server/_core/index";
import http from "http";
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

// Vercel 边缘函数处理程序
export default async function handler(request: Request): Promise<Response> {
  const app = await getApp();

  // 从请求创建 Node.js 风格的 req 和 res
  const url = new URL(request.url);
  const headers = Object.fromEntries(request.headers);

  // 创建可读流作为请求体
  let requestBody: Readable | undefined;
  if (request.body) {
    requestBody = Readable.fromWeb(request.body);
  }

  return new Promise((resolve) => {
    const req = {
      method: request.method,
      url: url.pathname + url.search,
      headers,
      body: requestBody,
      // 其他必要的请求属性
      connection: {},
      socket: {},
      hostname: url.hostname,
      protocol: url.protocol === "https:" ? "https" : "http",
      query: Object.fromEntries(url.searchParams)
    } as any;

    const res = {
      statusCode: 200,
      headers: {},
      body: "",
      write: function(chunk: any) {
        this.body += chunk;
        return true;
      },
      end: function(chunk?: any) {
        if (chunk) {
          this.body += chunk;
        }
        resolve(new Response(this.body, {
          status: this.statusCode,
          headers: this.headers
        }));
      },
      status: function(code: number) {
        this.statusCode = code;
        return this;
      },
      setHeader: function(name: string, value: string) {
        this.headers[name] = value;
        return this;
      },
      send: function(body: any) {
        this.body = body;
        this.end();
        return this;
      },
      json: function(body: any) {
        this.setHeader("Content-Type", "application/json");
        this.body = JSON.stringify(body);
        this.end();
        return this;
      }
    } as any;

    // 调用 Express 应用处理请求
    app(req, res);
  });
}
