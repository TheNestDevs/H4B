import { Context } from "hono";
import AppointmentService from "../services/appointments.service";

const superr = new AppointmentService();

export default class AppointmentController {
    async create(ctx: Context) {
        const data = await ctx.req.json();
        console.log(data);
        const appointment = await superr.createAppointment(data);
        return ctx.json({
            appointment
        });
    }

    async update(ctx: Context) {
        const { id } = ctx.req.param();
        const data = await ctx.req.json();
        const appointment = await superr.updateAppointment(id, data);
        return ctx.json({
            appointment
        });
    }

    async get(ctx: Context) {
        console.log(ctx.req.param())
        const { id } = ctx.req.param();
        const appointment = await superr.getAppointment(id);
        return ctx.json({
            appointment
        })
    }

    async getAll(ctx: Context) {
        const appointments = await superr.getAllAppointments();
        return ctx.json({
            appointments
        });
    }

    async delete(ctx: Context) {
        const { id } = ctx.req.param();
        const appointment = await superr.deleteAppointment(id);
        return ctx.json({
            appointment
        });
    }
}