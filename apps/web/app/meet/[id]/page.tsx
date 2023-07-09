"use client";

import { PhoneCall, User2, Video, Mic, PhoneOff } from "lucide-react";
import Button from "@/components/ui/Button";

const MeetPage = () => {
    return (
        <div className={"relative flex h-screen w-screen items-center justify-center bg-black"}>
            <User2 className={"h-20 w-20 text-white"} />
            <div className="user-video absolute bottom-10 right-10 h-52 w-80 rounded-lg bg-gray-900"></div>
            <div className="controls absolute bottom-10 flex gap-6">
                <Button className={"p rounded-full bg-red-200 px-5 py-5 text-red-800"}>
                    <PhoneOff className={"h-6 w-6"} />
                </Button>
                <Button className={"bg-green rounded-full px-5 py-5 text-white"}>
                    <Video className={"h-6 w-6"} />
                </Button>
                <Button className={"bg-green rounded-full px-5 py-5 text-white"}>
                    <Mic className={"h-6 w-6"} />
                </Button>
            </div>
        </div>
    );
};

export default MeetPage;
