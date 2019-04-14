const compression = require("compression");
const express = require("express");
const path = require("path");

import * as next from "next";
import { routes } from "./routes";

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use(compression());

  server.get("/service-worker.js", (req, res) => {
    // Don't cache service worker is a best practice (otherwise clients wont get emergency bug fix)
    res.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    res.set("Content-Type", "application/javascript");
    if (dev) {
      // app.serveStatic(req, res, path.resolve("./static/service-worker.js"));
    } else {
      app.serveStatic(req, res, path.resolve("./.next/service-worker.js"));
    }
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
