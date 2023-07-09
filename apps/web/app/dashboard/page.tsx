"use client";
import React, { useState } from "react";

import { Video } from "lucide-react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "@/styles/calendar.css";
import Button from "@/components/ui/Button";

const Dashboard = () => {
    const [value, setValue] = useState(new Date());
    const onAdd = (...values: never[]) => {
        setValue(values[0]);
    };
    return (
        <div className={"px-2 lg:px-20"}>
            <h1 className="heading my-16 mx-12 text-2xl font-regular text-text-secondary">
                Upcoming Appointments
            </h1>
            <div className={"flex flex-col gap-5 lg:flex-row"}>
                <div className="w-full lg:w-3/5 ">
                    <Calendar className={"calendar"} value={value} onChange={onAdd as never} />
                </div>
                <div className="w-full lg:w-2/5 lg:px-16">
                    <div className="bg-text-secondary p-5">
                        <p className="m-0 text-lg text-white">Appointments</p>
                        <p className="m-0 text-3xl text-white">18th May, 2023</p>
                    </div>
                    <div className="current my-10">
                        <p className="text-sm font-medium text-accent">CURRENT</p>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xl text-text">Mr. Amir El Amari</p>
                                <p className={"text-2xl text-accent"}>7:20pm - 8:00pm</p>
                            </div>
                            <div className="button h-full">
                                <Button className={"h-full"}>
                                    <Video className={"h-8 w-8"} />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="upcoming my-10">
                        <p className="mb-2 text-sm font-medium text-accent">UPCOMING</p>
                        <div className="list flex w-full flex-col gap-2">
                            <div className="meet">
                                <p className="text-xl text-text">Mr. Amir El Amari</p>
                                <p className={"text-2xl text-accent"}>7:20pm - 8:00pm</p>
                            </div>
                            <div className="meet">
                                <p className="text-xl text-text">Mr. Amir El Amari</p>
                                <p className={"text-2xl text-accent"}>7:20pm - 8:00pm</p>
                            </div>
                            <div className="meet">
                                <p className="text-xl text-text">Mr. Amir El Amari</p>
                                <p className={"text-2xl text-accent"}>7:20pm - 8:00pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
