"use client";
import React, { useState } from "react";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
    const [value, setValue] = useState(new Date());
    const onAdd = (...values: never[]) => {
        setValue(values[0]);
    };
    return (
        <div>
            <Calendar className={"w-full"} value={value} onChange={onAdd as never} />
        </div>
    );
};

export default Dashboard;
