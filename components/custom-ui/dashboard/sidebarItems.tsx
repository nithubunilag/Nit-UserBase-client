"use client";
import { useAppActions, useAppSelector } from "@/hooks";
import { usePathname, useRouter } from "next/navigation";
import { DashboardIcon, SettingsIcon, StaffsIcon } from "public/icons";
import React, { useState } from "react";
import { FaHouseDamage } from "react-icons/fa";
import { MdOutlineFolderCopy } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";

interface ISidebarItem {
    name: string;
    icon: JSX.Element;
    route: string;
    active: boolean;
    subItems?: ISidebarItem[];
}

interface ISidebarItemProp {
    item: ISidebarItem;
    depth: number;
}

const SidebarItems = () => {
    const pathname = usePathname();

    const isItemActive = (routes: string[], index: number = 1) => {
        const currentPath = pathname.split("/")[index];

        return routes.includes(currentPath);
    };

    const sidebarData: ISidebarItem[] = [
        {
            name: "Dashboard",
            icon: <DashboardIcon />,
            route: "/",
            active: isItemActive([""]),
        },

        {
            name: "Team",
            icon: <StaffsIcon />,
            route: "/team",
            active: isItemActive(["team"]),
        },

        // {
        //     name: "Team",
        //     icon: <StaffsIcon />,
        //     route: "/team",
        //     active: isItemActive(["user"]),
        //     subItems: [
        //         {
        //             name: "All",
        //             icon: <StaffsIcon />,
        //             route: "/team",
        //             active: isItemActive(["", "team"], 1),
        //         },
        //         {
        //             name: "Employees",
        //             icon: <AdminsIcon />,
        //             route: "/team/employees",
        //             active: isItemActive(["employees"], 2),
        //         },
        //         {
        //             name: "Students",
        //             icon: <AcademicIcon />,
        //             route: "/team/students",
        //             active: isItemActive(["students"], 2),
        //         },
        //         {
        //             name: "Interns",
        //             icon: <StaffsIcon />,
        //             route: "/user/interns",
        //             active: isItemActive(["interns"], 2),
        //         },
        //         {
        //             name: "Volunteers",
        //             icon: <UserIcon />,
        //             route: "/team/volunteers",
        //             active: isItemActive(["volunteers"], 2),
        //         },
        //     ],
        // },
        {
            name: "Projects",
            icon: <MdOutlineFolderCopy />,
            route: "/projects",
            active: isItemActive(["projects"]),
        },
        {
            name: "Departments",
            icon: <FaHouseDamage />,
            route: "/departments",
            active: isItemActive(["departments"]),
        },

        {
            name: "Settings",
            icon: <SettingsIcon />,
            route: "/settings",
            active: isItemActive(["settings"]),
        },
    ];

    return (
        <div>
            {sidebarData.map((item, index) => (
                <SidebarItem key={index} item={item} depth={0} />
            ))}
        </div>
    );
};

export default SidebarItems;

const SidebarItem = ({ item, depth }: ISidebarItemProp) => {
    const [isExpanded, setIsExpanded] = useState(item?.subItems?.some((subItem) => subItem.active) ? true : false);

    const { setSidebar } = useAppActions();
    const { isMobile } = useAppSelector((state) => state.appSlice);

    const router = useRouter();

    const handleClick = () => {
        if (item.subItems) {
            return setIsExpanded(!isExpanded);
        }

        if (isMobile) {
            setSidebar(false);
        }

        return router.push(item.route);
    };

    const paddingLeft = depth * 35 + 32;

    return (
        <div>
            <div
                onClick={() => handleClick()}
                style={{
                    paddingLeft: paddingLeft,
                }}
                className={`relative mb-[5px]  flex w-full cursor-pointer items-center justify-between bg-[#F6F7FD26] py-4 pr-5 `}
            >
                <div className="flex items-center gap-2">
                    {React.cloneElement(item.icon, {
                        basecolor: item.active ? "#fff" : undefined,
                        stroke: item.active ? "#fff" : undefined,
                        className: `text-[#B1B1B1] ${item.active ? "text-white" : ""}`,
                    })}

                    <p className={`text-sm font-medium transition-all duration-300 ease-in-out ${item.active ? "text-white" : "text-[#B1B1B1]"}`}>
                        {item.name}
                    </p>
                </div>

                {item.subItems && <SlArrowRight className="text-base font-light" />}

                <div
                    className={`absolute left-0 top-0 h-full bg-[#F6F7FD] transition-all duration-300 ease-in-out ${
                        item.active && !item.subItems ? "w-[5px]" : "w-0"
                    }`}
                />
            </div>

            {item.subItems && isExpanded && (
                <div>
                    {item.subItems.map((subItem, subItemIndex) => (
                        <SidebarItem key={subItemIndex} item={subItem} depth={depth + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};
