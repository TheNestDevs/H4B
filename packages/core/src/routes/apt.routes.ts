import { Hono } from "hono";

import aptController from "../controllers/appointment.controller";

const apt = new Hono();

apt.get("/", new aptController().getAll);
apt.get("/:id", new aptController().get);
apt.post("/", new aptController().create);
apt.put("/:id", new aptController().update);
apt.delete("/", new aptController().delete);

export { apt }