import { Hono } from "hono";

import epressController from "../controllers/eprescription.controller";

const epress = new Hono();

epress.post("/", new epressController().create);
epress.get("/:id", new epressController().getP);
epress.post("/verify", new epressController().verify)

export { epress }