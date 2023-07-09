import { Context } from "hono";

import EpressService from "../services/esprescription.service";

const superr = new EpressService();

export default class EpressController {
    async create(ctx: Context) {
        const data = await ctx.req.json();
        const prescription = await superr.createPrescription(data);
        return ctx.json({
            prescription
        });
    }

    async getP(ctx: Context) {
        const { id } = ctx.req.param();
        const prescription = await superr.getPrescription(id);
        return ctx.json({
            prescription
        });
    }
}