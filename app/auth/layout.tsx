"use client";

import { AuthSidebar } from "@/components/custom-ui/auth";
import { ACCESS_TOKEN_KEY, ICONS_DIR, ROUTES } from "@/utils/constants";
import Image from "next/image";
import { redirect } from "next/navigation";

interface IAuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (accessToken) redirect(ROUTES.dashboard.HOME);

    return (
        <section className="block h-screen w-full flex-col overflow-y-auto bg-[#f6f7fd] md:flex-row md:overflow-hidden lg:flex">
            <div className="block lg:hidden">
                <div className="relative h-[200px] w-full">
                    <Image src={`${ICONS_DIR}/auth-header.svg`} alt="Auth Header Image" fill className="object-cover" />
                </div>
            </div>

            <div className="hidden flex-1 lg:block">
                <AuthSidebar />
            </div>

            <div className="md:h-full md:flex-1 md:overflow-y-auto">{children}</div>
        </section>
    );
};

export default AuthLayout;
