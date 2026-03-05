import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  // Try multiple possible paths for static files
  const possiblePaths = [
    // Local development path
    path.resolve(import.meta.dirname, "../..", "dist", "public"),
    // Vercel deployment path
    path.resolve(process.cwd(), "dist", "public"),
    // Fallback to current directory
    path.resolve(process.cwd(), "public")
  ];

  let distPath = possiblePaths.find(path => fs.existsSync(path));
  
  if (!distPath) {
    console.error(
      `Could not find the build directory. Tried: ${possiblePaths.join(", ")}`
    );
    // Use a default path as fallback
    distPath = possiblePaths[0];
  }

  console.log(`Serving static files from: ${distPath}`);
  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    const indexHtmlPath = path.resolve(distPath, "index.html");
    if (fs.existsSync(indexHtmlPath)) {
      res.sendFile(indexHtmlPath);
    } else {
      console.error(`Could not find index.html at: ${indexHtmlPath}`);
      res.status(404).send("Not Found");
    }
  });
}
