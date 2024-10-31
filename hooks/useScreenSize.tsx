"use client";

import { useEffect, useState } from "react";
import { useAppActions } from "./useReduxActions";

export const useScreenSize = () => {
    const [screen, setScreen] = useState<number | null>(null);
    const { setIsMobile, setSidebar } = useAppActions();

    // Setting the Screen Size State whenever the screen is resized
    useEffect(() => {
        const handleResize = () => setScreen(window.innerWidth);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Toggling the isMobile State whenever the screensize changes
    useEffect(() => {
        if (screen! <= 768) {
            setIsMobile(true);
            setSidebar(false);
        } else {
            setIsMobile(false);
            setSidebar(true);
        }
    }, [screen]);

    return null;
};
