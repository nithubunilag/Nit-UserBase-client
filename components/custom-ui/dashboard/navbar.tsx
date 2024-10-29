"use client";

import { useAppActions } from "@/hooks";
import { authService } from "@/services/auth";
import { CACHE_KEYS, IMAGE_DIR } from "@/utils/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { useQuery } from "react-query";
import { Button } from "../button";

export const Navbar = () => {
    const { toggleSidebar } = useAppActions();

    const router = useRouter();

    const { isLoading: loggingOut, refetch } = useQuery({
        queryKey: [CACHE_KEYS.LOG_OUT],
        queryFn: authService.logout,
        enabled: false,
        onSuccess: () => {
            router.push("/auth/login");
        },
    });

    return (
        <nav className="fixed z-10 h-[80px] w-full border-b border-[#CACACA] bg-[#F6F7FD]">
            <div className="flex items-center justify-between px-3 py-2 lg:px-5 lg:pl-3 ">
                <button className="md:hidden" onClick={() => toggleSidebar()}>
                    <RxHamburgerMenu className="cursor-pointer text-2xl" />
                </button>

                <Image src={`${IMAGE_DIR}/atmua_logo.svg`} alt="logo" width={85} height={85} priority />

                <Button
                    onClick={() => refetch()}
                    loading={loggingOut}
                    variant="outlined"
                    title="Logout"
                    className="border-2 !py-2"
                    spanClassName="text-sm"
                />
            </div>
        </nav>
    );
};
