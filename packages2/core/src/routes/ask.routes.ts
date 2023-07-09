import { Hono } from "hono";

import AskController from "../controllers/ask.controller";

const ask = new Hono();

ask.post("/symp", new AskController().askSymptoms);
ask.post("/temp", new AskController().tempAsk);

export { ask }