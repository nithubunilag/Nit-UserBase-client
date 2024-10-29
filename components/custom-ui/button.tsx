import React from "react";
import { Spinner } from "./spinner";

type OptionalProps = {
    loading: boolean;
    spanClassName?: string;
};

type IButtonProps = {
    title: string | React.ReactNode;
    variant: "outlined" | "contained" | "text";
} & Partial<OptionalProps> &
    React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<IButtonProps> = (props) => {
    const { disabled = false, onClick, variant = "contained", loading = false, title, type = "button", style, className, spanClassName, ...others } = props;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            style={style}
            className={`border-secondary relative inline-block cursor-pointer  rounded-[4px] border px-6 py-2 text-center align-middle text-sm font-medium outline-none transition-all duration-300 ease-in-out md:py-3 md:text-base
      ${buttonConfig[variant]} disabled:pointer-events-none ${loading ? "!bg-secondary-light !text-secondary" : ""} ${className}`}
            {...others}
        >
            <span className={`flex items-center justify-center gap-4 space-x-3 ${spanClassName}`}>
                {title}
                {loading && (
                    <>
                        <Spinner />
                    </>
                )}
            </span>
        </button>
    );
};

const buttonConfig = {
    outlined: "bg-transparent text-secondary hover:bg-secondary hover:text-white disabled:opacity-[40%]",
    text: "border-none bg-transparent text-secondary disabled:text-opacity-50",
    contained:
        "bg-secondary text-white hover:text-secondary hover:bg-white hover:shadow-md disabled:bg-opacity-20 disabled:text-opacity-50 disabled:border-none",
};
