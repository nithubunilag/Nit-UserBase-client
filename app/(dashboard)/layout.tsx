"use client";

import { Navbar, Sidebar } from "@/components/custom-ui/dashboard";
import { ACCESS_TOKEN_KEY, ROUTES } from "@/utils/constants";
import { redirect } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (!accessToken) redirect(ROUTES.auth.LOGIN);

    return (
        <div className="h-full min-h-screen bg-[#F6F7FD]">
            <Navbar />

            <div className="flex overflow-scroll ">
                <Sidebar />

                {/* Main Content */}
                <main id="main-content" className="relative !z-0 w-full px-8 pt-[120px] md:ml-[17rem] ">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
