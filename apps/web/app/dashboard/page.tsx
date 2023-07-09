"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { Video } from "lucide-react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "@/styles/calendar.css";
import Button from "@/components/ui/Button";

const Dashboard = () => {
    const [value, setValue] = useState(new Date());
    const [data, setData] = useState<IAppointments[]>([]);
    const [current, setCurrent] = useState<IAppointments | null>(null);

    const onAdd = (...values: never[]) => {
        setValue(values[0]);
    };
    const parseTime = (time: string) => {
        const parsedTime = new Date(time);
        return (parsedTime.getHours() + ":" + parsedTime.getMinutes()).padStart(5, "0");
    };
    const fetchData = async () => {
        const { data } = await axios.get("https://5b91-203-171-240-120.ngrok-free.app/apt");
        setData(
            data.appointments.filter((item: IAppointments) => {
                // console.log(new Date(), new Date(item.apt_start));

                if (new Date(item.apt_start) < new Date()) {
                    if (new Date() < new Date(item.apt_end)) {
                        console.log(item);
                        if (!item.isComplete) setCurrent(item);
                    }
                    return false;
                }
                return true;
            }),
        );
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className={"px-2 lg:px-20"}>
            <h1 className="heading font-regular mx-12 my-16 text-2xl text-text-secondary">
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
                    {current && (
                        <div className="current my-10">
                            <p className="text-sm font-medium text-accent">CURRENT</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xl text-text">{current.apt_patient}</p>
                                    <p className={"text-2xl text-accent"}>
                                        {parseTime(current.apt_start)} -{" "}
                                        {parseTime(current.apt_end)}
                                    </p>
                                </div>
                                <div className="button h-full">
                                    <Button className={"h-full"}>
                                        <Video className={"h-8 w-8"} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="upcoming my-10">
                        <p className="mb-2 text-sm font-medium text-accent">UPCOMING</p>
                        <div className="list flex w-full flex-col gap-2">
                            {data.map(item => {
                                return (
                                    <div key={item.id} className="meet">
                                        <p className="text-xl text-text">{item.apt_patient}</p>
                                        <p className={"text-2xl text-accent"}>
                                            {parseTime(item.apt_start)} - {parseTime(item.apt_end)}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
