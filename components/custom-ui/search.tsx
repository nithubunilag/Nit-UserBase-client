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
        <div className="relative flex w-full items-center gap-[0.5em] rounded-[10px] bg-[#f9f9f9] px-4 py-[0.6rem] transition-all duration-[0.5s] ease-[ease-in-out] md:w-[400px]">
            <CiSearch />
            <input
                type="text"
                className="placeholder:text-[rgb(#232d23, 60%)] relative w-full border-[none] px-[15px] py-0 text-sm text-primary transition-all duration-[0.5s] ease-[ease-in-out]"
                placeholder="Search ....."
                value={searchKeyword}
                onChange={handleSearch}
            />
            <span className="ml-2.5 cursor-pointer" onClick={clearSearch}>
                {searchKeyword && <AiOutlineClose />}
            </span>
        </div>
    );
};
