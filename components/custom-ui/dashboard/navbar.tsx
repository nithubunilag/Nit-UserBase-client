"use client";

import { useAppActions } from "@/hooks";
import { NitdaLogo } from "@/public/icons";
import { ACCESS_TOKEN_KEY } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../button";

export const Navbar = () => {
    const { toggleSidebar } = useAppActions();

    const router = useRouter();

    // When Cookie Based Authentication Works, Re implement this
    // const { isLoading: loggingOut, refetch } = useQuery({
    //     queryKey: [CACHE_KEYS.LOG_OUT],
    //     queryFn: authService.logout,
    //     enabled: false,
    //     onSuccess: () => {
    //         router.push("/auth/login");
    //     },
    // });

    const handleLogout = async () => {
        localStorage.removeItem(ACCESS_TOKEN_KEY);

        router.push("/auth/login");
    };

    return (
        <nav className="fixed z-[5] flex h-[80px] w-full items-center justify-center border-b border-[#CACACA] bg-[#F6F7FD]">
            <div className="mx-auto flex w-[95%] items-center justify-between ">
                <button className="md:hidden" onClick={() => toggleSidebar()}>
                    <RxHamburgerMenu className="cursor-pointer text-2xl" />
                </button>

                <NitdaLogo width={150} height={70} />

                <Button
                    onClick={() => handleLogout()}
                    // loading={loggingOut}
                    variant="outlined"
                    label="Logout"
                    className="border-2 !py-2"
                    spanClassName="text-sm"
                />
            </div>
        </nav>
    );
};
