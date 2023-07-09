import { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nextjs 13, TailwindCss Template",
    description: "A template for frontend developers created By Chirag Bhalotia",
    manifest: "/manifest.json",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`${inter.className} text-text`}>
                {children}
            </body>
        </html>
    );
}
