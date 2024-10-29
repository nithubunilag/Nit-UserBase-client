import { useState } from "react";

export interface ISearchProps<T extends Record<string, any>, K extends keyof T> {
    initialState: T[];
    setState: React.Dispatch<React.SetStateAction<T[]>>;
    conditionKeyword: K;
    resetState: T[];
}

export const useSearch = <T extends Record<string, any>, K extends keyof T>(props: ISearchProps<T, K>) => {
    const { conditionKeyword, initialState, setState, resetState } = props;

    const [searchKeyword, setSearchKeyword] = useState("");
    const clearSearch = () => setSearchKeyword("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value);
        const searchKeyword = e.target.value;
        const result: T[] = [];
        if (searchKeyword === "") {
            setState(resetState!);
            return;
        } else {
            initialState.map((item) => {
                const currentItem = item[conditionKeyword]?.split("");
                const searchKeywordArr = searchKeyword?.split("");

                if (searchAlgorithm(currentItem, searchKeywordArr)) {
                    result.push(item);
                }
            });

            setState(result);
        }
    };

    const searchAlgorithm = (arr1: string[], searchedKeywordArr: string[]) => {
        const set = new Set(arr1);

        for (const item of searchedKeywordArr) {
            if (set.has(item)) {
                return true;
            }
        }
        return false;
    };

    //     const searchItem = (items:T[]) => {
    // items.filter
    //     }

    // function search(items) {
    //     return items.filter((item) => {
    //         if (item.region == filterParam) {
    //             return searchParam.some((newItem) => {
    //                 return (
    //                     item[newItem]
    //                         .toString()
    //                         .toLowerCase()
    //                         .indexOf(q.toLowerCase()) > -1
    //                 );
    //             });
    //         } else if (filterParam == "All") {
    //             return searchParam.some((newItem) => {
    //                 return (
    //                     item[newItem]
    //                         .toString()
    //                         .toLowerCase()
    //                         .indexOf(q.toLowerCase()) > -1
    //                 );
    //             });
    //         }
    //     });
    // }

    return {
        clearSearch,
        searchKeyword,
        handleSearch,
    };
};
