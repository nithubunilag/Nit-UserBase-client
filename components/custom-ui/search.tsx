"use client";

import { ISearchProps, useSearch } from "@/hooks";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

export const Search = <T extends Record<string, any>, K extends keyof T>({
    initialState,
    setState,
    conditionKeyword,
    resetState,
}: ISearchProps<T, K>): JSX.Element => {
    const { clearSearch, handleSearch, searchKeyword } = useSearch({
        initialState,
        setState,
        conditionKeyword,
        resetState,
    });

    return (
        <div className="focus-within:border-secondary group relative flex items-center gap-4 rounded-lg border border-[#DFDFDF] bg-transparent p-2 transition-all duration-300 ease-in-out md:min-w-[300px]">
            <CiSearch className="group-focus-within:text-secondary text-3xl font-bold  text-[#DFDFDF] transition-all duration-300 ease-in-out" />

            <input
                type="text"
                className="text-secondary relative border-none bg-transparent text-sm outline-none placeholder:text-sm placeholder:text-[#A1A1A1]"
                placeholder="Search ....."
                value={searchKeyword}
                onChange={handleSearch}
            />
            <span className="absolute right-4 ml-2.5 cursor-pointer" onClick={clearSearch}>
                {searchKeyword && <AiOutlineClose />}
            </span>
        </div>
    );
};
