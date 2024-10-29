"use client";

import { useEffect, useState } from "react";

interface IModalProps {
    children: JSX.Element;
    onClose: () => void;
    modalTrigger: boolean;
    compulsoryClose?: boolean;
    className?: string;
}
export interface IBaseModalProps {
    modalTrigger: boolean;
    handleClose: () => void;
}

export const ModalLayout = (props: IModalProps) => {
    const { children, onClose, compulsoryClose, modalTrigger, className } = props;

    const [showModalCard, setShowModalCard] = useState(modalTrigger);

    useEffect(() => {
        setShowModalCard(modalTrigger);
    }, [modalTrigger]);

    return (
        <div className={` ${showModalCard ? "fixed bottom-0 left-0 right-0 top-0 z-10" : "relative w-0"}`}>
            <div
                className={`absolute bottom-0 left-0 right-0 top-0 z-50 bg-[#333333]  opacity-70 transition-all duration-300 ease-in-out ${
                    showModalCard ? "h-screen w-screen scale-100" : "h-0 w-0 scale-0"
                }`}
                onClick={() => {
                    if (!compulsoryClose) {
                        setShowModalCard(false);
                    }
                    setTimeout(() => {
                        onClose();
                    }, 100);
                }}
            />
            <div
                className={`absolute left-1/2 top-1/2 z-[9999]  -translate-x-1/2 -translate-y-1/2  overflow-x-hidden overflow-y-scroll rounded-[16px] bg-[#E3E5F6] transition-all duration-300 ease-in-out  ${
                    showModalCard ? `max-h-[900px] w-[90%]  scale-100 px-3 py-5 md:max-w-[500px] md:p-5` : "h-0 w-0 scale-0 "
                } ${className}`}
            >
                {children}
            </div>
        </div>
    );
};
