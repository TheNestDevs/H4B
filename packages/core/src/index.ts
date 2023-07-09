import "dotenv/config";

import "./config/env";
import { serve } from "@hono/node-server";

import { app } from "./routes"
import { hgqlInit } from "./utils/gql_client"
import EnpCrypt from "./scripts/prepare"

hgqlInit()
new EnpCrypt("keys")

serve({
    fetch: app.fetch,
    port: Number(process.env.PORT),
});