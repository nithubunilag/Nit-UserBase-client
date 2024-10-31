import { lato } from "@/fonts";
import { TextareaHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import "./style.scss";

type TInputProps<T extends FieldValues> = {
    name: Path<T>;
    label: string;
    error?: string;
    register?: UseFormRegister<T>;
    labelClassname?: string;
    textAreaClassname?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = <T extends FieldValues>(props: TInputProps<T>) => {
    const { name, label, error, register, labelClassname, textAreaClassname, ...others } = props;

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

            <textarea
                id={name}
                className={`input-field placeholder:text-placeholder flex-1 rounded-lg border border-solid bg-white px-5 py-3 text-sm font-normal text-text-color-main outline-none placeholder:text-sm focus-within:border-primary md:text-base md:placeholder:text-base ${
                    others.disabled ? "disabled" : ""
                }  ${error ? "border-error" : "border-default"} ${lato.className} ${textAreaClassname}`}
                {...(register ? register(name) : {})}
                {...others}
            />

            {error && !others.disabled && <span className={`${lato.className} mt-1 text-xs text-[#EF233C]`}>{error}</span>}
        </label>
    );
};
