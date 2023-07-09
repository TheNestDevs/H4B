"use client";

import { PhoneCall, User2 } from "lucide-react";
import Button from "@/components/ui/Button";

const MeetPage = () => {
    return (
        <div className={"relative flex h-screen w-screen items-center justify-center bg-black"}>
            <User2 className={"h-20 w-20 text-white"} />
            <div className="user-video absolute bottom-10 right-10 h-52 w-80 rounded-lg bg-gray-900"></div>
            <div className="controls absolute bottom-10  flex gap-2">
                <Button className={"bg-green p rounded-full px-5 py-5 text-white"}>
                    <PhoneCall className={"h-6 w-6"} />
                </Button>
                <Button className={"bg-green rounded-full px-5 py-5 text-white"}>
                    <PhoneCall className={"h-6 w-6"} />
                </Button>
                <Button className={"bg-green rounded-full px-5 py-5 text-white"}>
                    <PhoneCall className={"h-6 w-6"} />
                </Button>
            </div>
        </div>
    );
};

export default MeetPage;