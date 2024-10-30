"use client";
import { SelectHTMLAttributes, useEffect, useRef, useState } from "react";
import { Radio } from "..";
import "./styles.scss";

export type IDropdownItem = { label: string; value: any };

type ISelectProps = {
    name: string;
    label: string;
    error?: string;
    options: IDropdownItem[];
    onItemClick?: (data: IDropdownItem) => void;
    placeHolder?: string;
    initialValue?: IDropdownItem;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = (props: ISelectProps) => {
    const labelRef = useRef<HTMLLIElement | null>(null);
    const optionsRef = useRef<HTMLUListElement | null>(null);
    const toggleRef = useRef<HTMLInputElement | null>(null);
    const { label, name, options, initialValue, ...others } = props;

    const [selectedItem, setSelectedItem] = useState("");

    const handleOptionClick = (option: IDropdownItem) => {
        if (labelRef.current) {
            labelRef.current.textContent = option.label;
            setSelectedItem(option.value);

            if (props.onItemClick) {
                props.onItemClick(option);
            }
        }
    };

    const handleDocumentClick = (e: MouseEvent) => {
        const element = e.target as HTMLElement;

        if (toggleRef.current && element === toggleRef.current) return;

        const isDropdownChild = element.closest(".dropdown__filter");

        if (!isDropdownChild && toggleRef.current) {
            toggleRef.current.checked = false;
        }
    };

    const initDropdown = () => {
        if (!labelRef.current) return;
        const placeholder = props.placeHolder ?? "Select an Item ...";

        if (!initialValue) {
            labelRef.current.textContent = placeholder;
            return setSelectedItem("");
        }

        if (!initialValue.label || !initialValue.label) {
            labelRef.current.textContent = placeholder;
            return setSelectedItem("");
        }

        labelRef.current.textContent = initialValue.label;
        setSelectedItem(initialValue.value);
    };

    useEffect(() => {
        initDropdown();
    }, [initialValue]);

    useEffect(() => {
        const options = optionsRef.current?.children;

        if (options) {
            Array.from(options).forEach((option) => {
                option.addEventListener("click", () => {
                    if (option instanceof HTMLLIElement) {
                        const inputVal = {
                            label: option.textContent || "",
                            value: option.textContent || "",
                        };

                        handleOptionClick(inputVal);
                    }
                });
            });
        }

        // Close dropdown on click outside
        document.addEventListener("click", handleDocumentClick);

        return () => {
            // Cleanup event listener on component unmount
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    return (
        <div className=" flex w-full flex-col">
            <span
                className={` mb-2  text-sm font-medium text-[#272727] md:mb-3 md:text-base ${
                    others.disabled ? "disabled" : ""
                } !flex items-center gap-[1px]`}
            >
                {label}

                {others.required ? <p className={`text-sm leading-none text-[#EF233C] md:text-base`}>*</p> : null}
            </span>

            <div className="flex flex-row gap-x-2  rounded-[4px] border border-solid border-transparent bg-white duration-200 ease-in focus-within:border-primary">
                <input type="checkbox" className="dropdown__switch" id={name} ref={toggleRef} hidden />
                <label htmlFor={name} className="dropdown__options-filter w-full cursor-pointer">
                    <ul
                        className="dropdown__filter relative !z-[8] flex bg-transparent px-5 py-3 text-base text-[#595959] duration-[0.3s] "
                        role="listbox"
                        tabIndex={-1}
                        ref={optionsRef}
                    >
                        <li
                            // aria-selected="true"
                            className={`${selectedItem ? "capitalize text-text-color-main" : "text-[#B7B7B7] "}`}
                            ref={labelRef}
                        >
                            {props.placeHolder ?? "Select an Item ..."}
                        </li>

                        <li>
                            <ul className="dropdown__select absolute left-0 top-full z-50 mt-[5px] max-h-[300px] w-full origin-top scale-y-0 overflow-hidden overflow-y-scroll rounded-[8px] bg-white font-light shadow-[0_5px_10px_0px_rgba(152,152,152,0.6)] transition-all duration-[0.2s] ease-in-out">
                                {options.map((item, index) => (
                                    <li
                                        key={index}
                                        className="dropdown__select-option flex flex-row items-center justify-between gap-x-4 border-b border-b-[#CACACA] px-5 py-3 duration-300  "
                                        role="option"
                                        onClick={() => handleOptionClick(item)}
                                    >
                                        <span className="inline-block capitalize ">{item.label}</span>

                                        <Radio
                                            checked={item.value === selectedItem}
                                            onChange={() => {}}
                                            className="h-[20px] w-[20px] checked:!border-[5px]"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </label>
            </div>
        </div>
    );
};
