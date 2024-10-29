"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PopOver } from "..";
import SidebarItems from "./sidebarItems";

export const Sidebar = () => {
    const sidebarOpened = true;

    const [popItemOpened, setPopItemOpened] = useState(false);

    return (
        <aside
            className={`transition-width fixed left-0 top-0 z-[8] flex h-full flex-shrink-0 flex-col duration-75 lg:flex ${
                sidebarOpened ? "w-screen md:w-[17rem]" : "w-0"
            }`}
            aria-label="Sidebar"
        >
            <div className="bg-secondary relative flex min-h-0 flex-1 flex-col">
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

                            <PopOver location="bottom" onTrigger={(state) => setPopItemOpened(state)} content={<StaffSidebarPopoverContent />}>
                                <div>
                                    <h2 className="flex items-center font-semibold text-white">
                                        Admin
                                        <MdOutlineArrowDropDown
                                            className={`text-2xl transition-all duration-300 ease-in-out ${
                                                popItemOpened ? "rotate-180" : "rotate-0"
                                            }`}
                                        />
                                    </h2>

                                    <p className="text-sm text-[#BDBDBD]">Super Admin</p>
                                </div>
                            </PopOver>
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

    return (
        <div className={`${props?.show ? " w-[160px] " : "w-0 "} overflow-hidden rounded-md bg-white transition-all duration-300 ease-in-out `}>
            <button
                onClick={() => handleButtonClick("/profile")}
                className="w-full border-b border-b-[#CACACA] py-3 pl-6 text-start text-[#797979] transition-all duration-300 ease-in-out hover:bg-[#c7c7c7]"
            >
                View profile
            </button>
            <button
                onClick={() => handleButtonClick("#")}
                className="w-full border-b border-b-[#CACACA]  py-3 pl-6 text-start text-[#797979] transition-all duration-300 ease-in-out hover:bg-[#c7c7c7]"
            >
                Log Out
            </button>
        </div>
    );
};
