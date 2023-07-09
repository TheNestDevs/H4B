"use client";

import { useState } from "react";

import { Mic, PhoneOff, User2, Video } from "lucide-react";
import AgoraUIKit from "agora-react-uikit";

import Button from "@/components/ui/Button";

const MeetPage = () => {
    const [videoCall, setVideoCall] = useState(false);

    const rtcProps = {
        appId: "d37f8e2e8aeb44b1aba9a911d957b666",
        channel: "test",
        token: "007eJxTYPi3fecUi5gb/7LCv4es2VltIDtVo3DrVX6md416bK5X0ooVGNJMTI2SzSzMzNNMU0zMk0wtEhPNk5PSjM1MTC0Mjc1SEv+sSmkIZGS4Nes1MyMDBIL4LAwlqcUlDAwAqO8hIQ==",
    };
    const callbacks = {
        EndCall: () => setVideoCall(false),
    };
    return videoCall ? (
        <div className={"video relative flex h-screen w-screen"}>
            <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
        </div>
    ) : (
        <h3 onClick={() => setVideoCall(true)}>Join</h3>
    );
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
