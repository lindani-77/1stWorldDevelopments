try {
  if (!process.stdin.isTTY) {
    const { Readable } = require("node:stream");
    process.stdin = Readable.from([]);
  }
} catch {}

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const port = Number(process.env.PORT || 3000);
const publicDirectory = path.resolve(__dirname, ".output", "public");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function serveStaticAsset(incomingRequest, outgoingResponse) {
  if (incomingRequest.method !== "GET" && incomingRequest.method !== "HEAD") {
    return false;
  }

  let requestedPath;
  try {
    requestedPath = decodeURIComponent(new URL(incomingRequest.url || "/", "http://localhost").pathname);
  } catch {
    return false;
  }

  const assetPath = path.resolve(publicDirectory, `.${requestedPath}`);
  if (assetPath !== publicDirectory && !assetPath.startsWith(`${publicDirectory}${path.sep}`)) {
    outgoingResponse.writeHead(400, { "content-type": "text/plain; charset=utf-8" });
    outgoingResponse.end("Bad Request");
    return true;
  }

  let assetStats;
  try {
    assetStats = await fs.promises.stat(assetPath);
  } catch {
    return false;
  }

  if (!assetStats.isFile()) return false;

  const extension = path.extname(assetPath).toLowerCase();
  outgoingResponse.writeHead(200, {
    "cache-control": "public, max-age=31536000, immutable",
    "content-length": assetStats.size,
    "content-type": contentTypes[extension] || "application/octet-stream",
  });

  if (incomingRequest.method === "HEAD") {
    outgoingResponse.end();
  } else {
    fs.createReadStream(assetPath).pipe(outgoingResponse);
  }

  return true;
}

async function startServer() {
  const serverModule = await import("./.output/server/index.mjs");
  const handler = serverModule.default ?? serverModule;

  const server = http.createServer(async (incomingRequest, outgoingResponse) => {
    try {
      if (await serveStaticAsset(incomingRequest, outgoingResponse)) return;

      const host = incomingRequest.headers.host || "localhost";
      const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
      const url = `${protocol}://${host}${incomingRequest.url || "/"}`;
      const headers = new Headers();

      for (const [name, value] of Object.entries(incomingRequest.headers)) {
        if (Array.isArray(value)) {
          headers.set(name, value.join(", "));
        } else if (value !== undefined) {
          headers.set(name, value);
        }
      }

      const hasBody = incomingRequest.method !== "GET" && incomingRequest.method !== "HEAD";
      const request = new Request(url, {
        method: incomingRequest.method,
        headers,
        body: hasBody ? incomingRequest : undefined,
        duplex: hasBody ? "half" : undefined,
      });
      const response = await handler.fetch(request, {}, { waitUntil() {} });

      outgoingResponse.writeHead(response.status, Object.fromEntries(response.headers));
      if (incomingRequest.method === "HEAD" || !response.body) {
        outgoingResponse.end();
        return;
      }

      const body = response.body.getReader();
      while (true) {
        const { done, value } = await body.read();
        if (done) break;
        outgoingResponse.write(value);
      }
      outgoingResponse.end();
    } catch (error) {
      console.error(error);
      if (!outgoingResponse.headersSent) {
        outgoingResponse.writeHead(500, { "content-type": "text/plain" });
      }
      outgoingResponse.end("Internal Server Error");
    }
  });

  server.listen(port, "0.0.0.0", () => {
    console.log(`Production server listening on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start production server:", error);
  process.exitCode = 1;
});
