import { Context, Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { ask } from "./ask.routes";
import { epress } from "./epres.routes";
import { apt } from "./apt.routes";


const app = new Hono();

app.use("*", logger())

app.use("*", cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    maxAge: 86400
}))

app.get("/", (ctx: Context) => {
    return ctx.text("Hello World!");
})

app.route("/ask", ask);
app.route("/epres", epress);
app.route("/apt", apt);

export { app }