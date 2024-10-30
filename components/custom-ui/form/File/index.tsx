"use client";

import { lato } from "@/fonts";
import { convertFileToReadableStream, ICONS_DIR } from "@/utils";
import Image from "next/image";
import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type IFileInput<T extends FieldValues> = {
    name: Path<T>;
    label: string;
    error?: string;
    register: UseFormRegister<T>;
    handleChange?: (file: File) => void;
    fileValue?: File | string;
    customImage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const FileInput = <T extends FieldValues>(props: IFileInput<T>) => {
    const { name, label, error, register, customImage, fileValue, ...others } = props;

    const { ref: registerRef, ...rest } = register(name);

    const [readableStream, setReadableStream] = useState<string | null>(null);

    const handleUploadFile: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
        if (!e.target.files) return;

        const file = e.target.files[0];

        await handleConvertToStream(file);

        if (props.handleChange) {
            props.handleChange(file);
        }
    };

    const handleConvertToStream = async (file: File) => {
        const stream = await convertFileToReadableStream(file);

        setReadableStream(stream);
    };

    useEffect(() => {
        if (fileValue && typeof fileValue !== "string") {
            handleConvertToStream(fileValue);
        }
        if (fileValue && typeof fileValue === "string") {
            setReadableStream(fileValue);
        }
    }, [fileValue]);

    return (
        <div className="atmua-input flex w-full flex-col">
            <span className={`${lato.className} mb-2 text-sm font-medium text-[#272727] md:mb-3 md:text-base ${others.disabled ? "disabled" : ""}`}>
                {label}

                {others.required ? <sup className={`text-sm leading-none text-[#EF233C] md:text-base`}>*</sup> : null}
            </span>

            {!readableStream && !customImage && (
                <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
                    <div className=" flex w-full items-center  justify-center rounded-[4px] border border-solid border-transparent bg-white py-3 duration-200 ease-in focus-within:border-primary">
                        <div className="flex items-center"></div>

                        <Image src={`${ICONS_DIR}/cloud.svg`} alt="Upload" width={20} height={20} />

                        <p className="ml-3 text-sm font-normal text-[#939393] ">
                            Drag and drop files to attach or <span className="text-[#4F5DC1]">browse</span>
                        </p>
                    </div>
                    <input
                        {...rest}
                        type="file"
                        id={name}
                        name={name}
                        accept={others.accept ?? "image/*"}
                        onChange={handleUploadFile}
                        className="h-0 w-0 "
                    />
                </label>
            )}

            {!readableStream && customImage && (
                <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
                    <Image src={customImage} alt="Upload" priority unoptimized width={200} height={200} />

                    <input {...rest} type="file" id={name} name={name} accept="image/*" onChange={handleUploadFile} className="h-0 w-0 " />
                </label>
            )}

            {readableStream && (
                <div className="my-5 flex h-full w-full items-center justify-center">
                    <Image width={200} height={200} src={readableStream} alt="Item" />
                </div>
            )}

            {error && !others.disabled && <span className={`${lato.className} mt-1 text-xs text-[#EF233C]`}>{error}</span>}
        </div>
    );
};
