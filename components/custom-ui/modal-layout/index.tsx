"use client";

// import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import styles from "./modallayout.module.scss";

interface IModalProps {
    children: JSX.Element;
    onClose: () => void;
    showModal: boolean;
}
export interface IBaseModalProps {
    modalTrigger: boolean;
    handleClose: () => void;
}

export function ModalLayout(props: IModalProps) {
    const { children, onClose, showModal } = props;

    const [showModalCard, setShowModalCard] = useState(showModal);
    const modalContainerRef = useRef<HTMLDivElement>(null);
    const modalCardRef = useRef<HTMLDivElement>(null);

    const handleBackground = () => {
        if (showModal) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.overflow = "hidden";
            document.body.style.width = "100%";
        }

        if (!showModal) {
            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.overflow = "";
            document.body.style.width = "";
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }
    };

       useEffect(() => {
           handleBackground();

           if (!showModal) {
               // Add a small delay before calling onClose to allow the animation to complete
               const timer = setTimeout(() => {
                   setShowModalCard(false);
                   onClose();
               }, 200); // matches transition duration
               return () => clearTimeout(timer);
           }
       }, [showModal, onClose]);

    return (
        <div
            ref={modalContainerRef}
            className={`fixed inset-0 z-10 overflow-hidden bg-[rgba(51,51,51,0.7)] transition-all duration-300 ease-in-out ${showModalCard ? "visible opacity-100" : "hidden opacity-0"}`}
            onClick={() => {
                setShowModalCard(false);
                onClose();
            }}
        >
            {/* <div
                ref={modalCardRef}
                onClick={(e) => e.stopPropagation()}
                className={`${styles.modalCard} ${styles.w_full} transition-transform duration-200 ease-in-out ${
                    showModal ? `scale-100 ${styles.visible}` : `scale-0 ${styles.hidden}`
                }`}
            >
                <div className="h-full overflow-hidden overflow-y-scroll rounded-[32px] bg-white pb-6 md:max-h-[85vh]">{children}</div>
            </div> */}
            <div
                ref={modalCardRef}
                onClick={(e) => e.stopPropagation()}
                className={`${styles.modalCard} ${styles.w_full} ${showModalCard ? styles.visible : styles.hidden}`}
            >
                <div className="h-full overflow-hidden overflow-y-scroll rounded-[32px] bg-white pb-6 md:max-h-[85vh]">{children}</div>
            </div>
        </div>
    );
}
