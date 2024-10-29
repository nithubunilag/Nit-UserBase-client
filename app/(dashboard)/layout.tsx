import { PrivateRoute } from "@/components/custom-ui";
import { Navbar, Sidebar } from "@/components/custom-ui/dashboard";
import { ROUTES } from "@/utils/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken");

    if (!token) return redirect(ROUTES.auth.LOGIN);

    return (
        <PrivateRoute require="auth" token={token}>
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
        </PrivateRoute>
    );
};

export default DashboardLayout;
