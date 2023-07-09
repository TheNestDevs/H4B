import { Context } from "hono";

import AskService from "../services/ask.service";

interface SuspectedSymptoms {
    symptoms: string;
}

export default class AskController extends AskService {
    constructor() {
        super();
    }

    async askSymptoms(ctx: Context) {
        const suspectedSymptoms: SuspectedSymptoms = await ctx.req.json();
        const response = await super.askWhomToConsult2(suspectedSymptoms.symptoms);
        return ctx.json({
            response
        })
    }

    async tempAsk(ctx: Context) {
        const suspectedSymptoms: SuspectedSymptoms = await ctx.req.json();
        const response = await super.tempAskCons(suspectedSymptoms.symptoms);
        return ctx.json({
            response
        })
    }
}