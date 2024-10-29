import { lato } from "@/fonts";
import { ICONS_DIR } from "@/utils/constants";
import Image from "next/image";
import React, { InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type IFileInput<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  error?: string;
  register: UseFormRegister<T>;
} & InputHTMLAttributes<HTMLInputElement>;

export const FileInput = <T extends FieldValues>(props: IFileInput<T>) => {
  const { name, label, error, register, ...others } = props;

  const { ref: registerRef, ...rest } = register(name);

  const handleUploadFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e);
  };

  return (
    <div className="atmua-input flex flex-col w-full">
      <span
        className={`${
          lato.className
        } text-[#272727] text-sm md:text-base font-medium mb-2 md:mb-3 ${
          others.disabled ? "disabled" : ""
        }`}
      >
        {label}

        {others.required ? (
          <sup className={`text-[#EF233C] text-sm md:text-base leading-none`}>
            *
          </sup>
        ) : null}
      </span>

      <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
        <div className=" flex items-center justify-center  bg-white rounded-[4px] border border-solid border-transparent focus-within:border-primary ease-in duration-200 w-full py-3">
          <div className="flex items-center"></div>

          <Image
            src={`${ICONS_DIR}/cloud.svg`}
            alt="Upload"
            width={20}
            height={20}
          />

          <p className="text-[#939393] font-normal text-sm ml-3 ">
            Drag and drop files to attach or{" "}
            <span className="text-[#4F5DC1]">browse</span>
          </p>
        </div>
        <input
          {...rest}
          type="file"
          id={name}
          name={name}
          accept="image/*"
          onChange={handleUploadFile}
          className="w-0 h-0 "
          ref={(e) => {
            registerRef(e);
          }}
        />
      </label>
    </div>
  );
};
