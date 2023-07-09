"use client";
import React from "react";
import Navbar from "@/components/ui/Navbar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <>
            <div className="relative h-screen w-screen">
                <Navbar />
                <main className="h-screen pt-20">
                    <div className="mx-auto px-4 pb-12 sm:px-6 lg:px-8">{children}</div>
                </main>
            </div>
        </>
    );
}
