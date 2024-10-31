"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    modalTrigger: boolean;
    onClose: () => void;
    title?: string;
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export const ModalLayout = (props: ModalProps) => {
    const { modalTrigger, onClose, title = "Modal Title", size = "md", children } = props;

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (modalTrigger) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [modalTrigger, onClose]);

    useEffect(() => {
        if (modalTrigger && modalRef.current) {
            modalRef.current.focus();
        }
    }, [modalTrigger]);

    if (!modalTrigger) return null;

    const sizeClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
    };

    return createPortal(
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
                {/* Background overlay */}
                <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" aria-hidden="true" onClick={onClose}></div>

                {/* Modal panel */}
                <div
                    ref={modalRef}
                    className={`bg-background inline-block w-full transform overflow-hidden rounded-lg text-left align-bottom shadow-xl transition-all sm:my-8 sm:align-middle ${sizeClasses[size]}`}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                    tabIndex={-1}
                >
                    <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="flex items-start justify-between">
                            <h3 className="text-lg font-medium leading-6" id="modal-headline">
                                {title}
                            </h3>
                            <button
                                onClick={onClose}
                                className="ml-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <span className="sr-only">Close</span>
                            </button>
                        </div>
                        <div className="mt-2">{children}</div>
                    </div>
                </div>
            </div>
        </div>,
        document.body,
    );
};
