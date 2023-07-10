import { Context } from "hono";

import EpressService from "../services/esprescription.service";
import EnpCript from "../scripts/prepare";

const superr = new EpressService();
const enp = new EnpCript("keys");

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
            prescription,
            security: await enp.encryptMessage(prescription.meds, "doctors")
        });
    }

    async verify(ctx: Context) {
        const response = await superr.verifyPrescription();
        return ctx.json({
            response
        })
    }
}