"use client";

import { useAppSelector } from "@/hooks";
import { authService } from "@/services/auth";
import { CACHE_KEYS } from "@/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQuery } from "react-query";
import { Spinner } from "..";
import SidebarItems from "./sidebarItems";

export const Sidebar = () => {
    const [popItemOpened, setPopItemOpened] = useState(false);

    const { sidebarOpened } = useAppSelector((state) => state.appSlice);

    return (
        <aside
            className={`transition-width fixed left-0 top-0 z-[3] flex h-full flex-shrink-0 flex-col duration-300 lg:flex ${
                sidebarOpened ? "w-screen md:w-[17rem]" : "w-0"
            }`}
            aria-label="Sidebar"
        >
            <div className="relative flex min-h-0 flex-1 flex-col bg-secondary">
                <div className={`h-full overflow-y-scroll pt-[120px]  text-white ${sidebarOpened ? "block" : "hidden"}`}>
                    <div>
                        <div className="mx-auto flex items-center gap-4 pl-8">
                            <Image
                                src="https://t4.ftcdn.net/jpg/04/02/62/41/360_F_402624137_Yc0kTeIm7mJn9YA67pwIOsiDeAb5D2tb.jpg"
                                alt="profile pic"
                                width={60}
                                height={60}
                                className="rounded-md"
                            />

                            <div>
                                <h2 className="flex items-center font-semibold text-white">Admin</h2>

                                <p className="text-sm text-[#BDBDBD]">Super Admin</p>
                            </div>
                        </div>

                        <h2 className="mb-4 ml-8 mt-8 text-sm font-medium">Main Menu</h2>

                        <SidebarItems />
                    </div>
                </div>
            </div>
        </aside>
    );
};

const StaffSidebarPopoverContent = ({ ...props }) => {
    const router = useRouter();

    const handleButtonClick = (route: string) => {
        props?.setShow(false);
        router.push(route);
    };

    const { isLoading: loggingOut, refetch } = useQuery({
        queryKey: [CACHE_KEYS.LOG_OUT],
        queryFn: authService.logout,
        enabled: false,
        onSuccess: () => {
            router.push("/auth/login");
        },
    });

    return (
        <div className={`${props?.show ? " w-[160px] " : "w-0 "} overflow-hidden rounded-md bg-white transition-all duration-300 ease-in-out `}>
            <button
                onClick={() => handleButtonClick("/profile")}
                className="w-full border-b border-b-[#CACACA] py-3 pl-6 text-start text-[#797979] transition-all duration-300 ease-in-out hover:bg-[#c7c7c7]"
            >
                View profile
            </button>
            <button
                onClick={() => refetch()}
                className="flex w-full items-center gap-3 border-b border-b-[#CACACA] py-3 pl-6 text-start text-[#797979] transition-all duration-300 ease-in-out hover:bg-[#c7c7c7]"
            >
                {loggingOut ? "Logging out..." : "Log Out"} {loggingOut && <Spinner />}
            </button>
        </div>
    );
};
