import { createRequestHandler } from "react-router";

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

// Set to false (and redeploy) to bring the site back.
const MAINTENANCE = true;

const maintenanceHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Odisha Coffee</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:system-ui,sans-serif;background:#faf7f2;color:#2b1d12;text-align:center;padding:16px}a{color:inherit;font-weight:600}</style></head><body><main><h1>Odisha Coffee</h1><p>Contact us on WhatsApp: <a href="https://wa.me/918527914317">+91 8527914317</a></p><p>Support: <a href="mailto:arjun@graycup.in">arjun@graycup.in</a></p></main></body></html>`;

export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext) {
    if (MAINTENANCE) {
      return new Response(maintenanceHtml, {
        status: 503,
        headers: { "content-type": "text/html; charset=utf-8", "retry-after": "86400", "x-robots-tag": "noindex" },
      });
    }
    return requestHandler(request, { cloudflare: { env, ctx } });
  },
};
