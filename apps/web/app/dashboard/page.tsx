"use client";
import React, { useState } from "react";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "@/styles/calendar.css";
import Button from "@/components/ui/Button";
import {Camera, Video} from "lucide-react";

const Dashboard = () => {
    const [value, setValue] = useState(new Date());
    const onAdd = (...values: never[]) => {
        setValue(values[0]);
    };
    return (
        <div className={"px-20"}>
            <h1 className="heading my-5 text-5xl font-medium text-text-secondary">
                Your Appointments
            </h1>
            <div className={"flex"}>
                <div className="w-3/5 ">
                    <Calendar className={"calendar"} value={value} onChange={onAdd as never} />
                </div>
                <div className="w-2/5 px-16">
                    <div className="bg-text-secondary p-5">
                        <p className="m-0 text-lg text-white">Appointments</p>
                        <p className="m-0 text-3xl text-white">18th May, 2023</p>
                    </div>
                    <div className="current my-10">
                        <p className="text-sm font-medium text-accent">CURRENT</p>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-lg text-text">Mr. Amir El Amari</p>
                                <p className={"text-2xl text-accent"}>7:20pm - 8:00pm</p>
                            </div>
                            <div className="button h-full">
                                <Button className={"h-full"}>
                                    <Video className={"h-8 w-8"} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
