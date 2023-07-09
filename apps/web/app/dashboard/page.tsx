"use client";
import React, { useState } from "react";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "@/styles/calendar.css";

const Dashboard = () => {
    const [value, setValue] = useState(new Date());
    const onAdd = (...values: never[]) => {
        setValue(values[0]);
    };
    return (
        <div className={".flex px-32"}>
            <div className="w-3/5 ">
                <Calendar className={"calendar"} value={value} onChange={onAdd as never} />
            </div>
            <div className="2/5"></div>
        </div>
    );
};

export default Dashboard;
