import { lato } from "@/fonts";
import React, { InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import "./styles.scss";

type TInputProps<T extends FieldValues> = {
    name: Path<T>;
    label: string;
    error?: string;
    prefixIcon?: React.ReactNode;
    register?: UseFormRegister<T>;
    labelClassname?: string;
    inputClassname?: string;
    inputContainerClassname?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = <T extends FieldValues>(props: TInputProps<T>) => {
    const { name, label, error, prefixIcon, register, labelClassname, inputClassname, inputContainerClassname, className, ...others } = props;

    return (
        <label htmlFor={name} className="atmua-input flex w-full flex-col">
            <span
                className={`mb-2 !flex items-center gap-[1px] text-sm   font-medium md:mb-3 md:text-base ${
                    others.disabled ? "disabled" : ""
                } ${others.readOnly ? "text-gray-500" : "text-[#272727]"} ${labelClassname} `}
            >
                {label}

                {others.required ? <p className={`text-sm leading-none text-[#EF233C] md:text-base`}>*</p> : null}
            </span>

            <div
                className={`input-container flex items-center flex-row gap-x-2 overflow-hidden rounded-lg border border-solid ${
                    error ? "border-error" : "border-default"
                } bg-white duration-200 ease-in focus-within:border-primary ${inputContainerClassname}`}
            >
                <input
                    id={name}
                    className={`input-field ${lato.className} flex-1 px-5 py-3 text-sm font-normal text-text-color-main outline-none placeholder:text-sm placeholder:text-placeholder md:text-base md:placeholder:text-base ${
                        others.disabled ? "disabled" : ""
                    } ${inputClassname}`}
                    {...(register ? register(name) : {})}
                    {...others}
                />
                {prefixIcon && <div className="prefix-icon">{prefixIcon}</div>}
            </div>

            {error && !others.disabled && <span className={`${lato.className} mt-1 text-xs text-[#EF233C]`}>{error}</span>}
        </label>
    );
};
