import "dotenv/config";

import "./config/env";
import { serve } from "@hono/node-server";

import { app } from "./routes"
import { hgqlInit } from "./utils/gql_client"
import EnpCrypt from "./scripts/prepare"

hgqlInit()
const enpcrypt = new EnpCrypt("keys")

enpcrypt.generateKey("doctors")

serve({
    fetch: app.fetch,
    port: Number(process.env.PORT),
});

console.log(process.env.OPEN_AI_API_KEY);