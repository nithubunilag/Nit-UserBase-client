"use client";

import React, { useEffect, useRef, useState } from "react";
import { BsArrowDown, BsCheck } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

interface Option {
    value: string;
    label: string;
}

interface SearchableDropdownProps {
    options?: Option[];
    placeholder?: string;
    onChange: (selectedOption: Option | null) => void;
}

export const SearchableDropdown = (props: SearchableDropdownProps) => {
    const { options = [], placeholder = "Select an option", onChange } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filteredOptions = options?.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase())) ?? [];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setSearchTerm("");
        }
    };

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        onChange(option);
        setIsOpen(false);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="relative w-full max-w-xs" ref={dropdownRef}>
            <button
                type="button"
                className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={handleToggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className="block truncate">{selectedOption ? selectedOption.label : placeholder}</span>
                <BsArrowDown className="-mr-1 ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
                    <div className="px-3 py-2">
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                            <input
                                type="text"
                                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                    <ul className="max-h-60 overflow-auto py-1" role="listbox" aria-label="Options">
                        {filteredOptions.length === 0 ? (
                            <li className="px-3 py-2 text-gray-500">No options found</li>
                        ) : (
                            filteredOptions.map((option) => (
                                <li
                                    key={option.value}
                                    className={`flex cursor-pointer items-center justify-between px-3 py-2 ${
                                        selectedOption?.value === option.value ? "text-primary-foreground bg-primary" : "hover:bg-primary/10"
                                    }`}
                                    role="option"
                                    aria-selected={selectedOption?.value === option.value}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    <span>{option.label}</span>
                                    {selectedOption?.value === option.value && <BsCheck className="h-5 w-5" aria-hidden="true" />}
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};
