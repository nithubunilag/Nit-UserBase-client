"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

interface SideDrawerProps {
    drawerTrigger: boolean;
    handleClose: () => void;
    children: JSX.Element;
}

export const SideDrawer = (props: SideDrawerProps) => {
    const { drawerTrigger, handleClose, children } = props;

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    const drawerContent = (
        <div className={`relative ${drawerTrigger ? "overflow-hidden " : ""}`}>
            {drawerTrigger && (
                <div
                    className="fixed inset-0 z-40 overflow-hidden bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
                    onClick={handleClose}
                    aria-hidden="true"
                ></div>
            )}

            <div
                className={`fixed right-0 top-0 z-50 h-full w-96 transform overflow-hidden bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                    drawerTrigger ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {children}
            </div>
        </div>
    );

    // Only render if we're in the browser
    if (typeof window === "undefined") return null;

    return createPortal(drawerContent, document.body);
};
