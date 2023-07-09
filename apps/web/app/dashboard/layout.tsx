"use client";
import React from "react";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <>
            <div className="min-h-full">
                <main className="pt-10">
                    <div className="mx-auto px-4 pb-12 sm:px-6 lg:px-8">{children}</div>
                </main>
            </div>
        </>
    );
}
