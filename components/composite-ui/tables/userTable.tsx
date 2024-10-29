import {
    TableBodyContainer,
    TableBodyRow,
    TableBodyRowChild,
    TableHead,
    TableHeadContainer,
    TableLayout,
    TablePagination,
} from "@/components/custom-ui/table";
import { usePagination } from "@/hooks";
import { CiSearch } from "react-icons/ci";

export const UserTable = () => {
    const tableHead = ["Username", "Creation Time"];

    const { currentItems, currentPage, nextPage, prevPage, totalPages, goToPage, totalDataLength } = usePagination(userData, 10);
    return (
        <div>
            <div className="relative mb-6 flex items-center gap-4 rounded-lg border border-[#CACACA] bg-transparent p-2 md:w-[300px]">
                <CiSearch className="text-3xl font-bold text-[#CACACA]" />
                <input
                    type="text"
                    className="relative border-none bg-transparent text-sm outline-none placeholder:text-sm placeholder:text-[#A1A1A1]"
                    placeholder="Search"
                />
            </div>

            <TableLayout
                paginator={
                    <div className="py-6 ">
                        <TablePagination
                            currentPage={currentPage}
                            goToPage={goToPage}
                            nextPage={nextPage}
                            prevPage={prevPage}
                            totalPages={totalPages}
                            itemsAmount={currentItems.length}
                            totalDataLength={totalDataLength}
                        />
                    </div>
                }
            >
                <TableHeadContainer>
                    <>
                        {/* Checkbox Column */}
                        <TableHead label={""} />

                        {/* Other Headers */}
                        {tableHead.map((head) => (
                            <TableHead label={head} key={head} />
                        ))}
                    </>
                </TableHeadContainer>

                <TableBodyContainer>
                    <>
                        {userData?.length === 0 && (
                            <tr className="!bg-transparent ">
                                <td colSpan={tableHead.length + 1}>No Applicants</td>
                            </tr>
                        )}

                        {userData?.length > 0 && (
                            <>
                                {currentItems?.map((item, index) => (
                                    <TableBodyRow
                                        className="
                    !cursor-pointer border-l-[4px] border-transparent transition-all duration-300  ease-in-out hover:border-l-[#232e7d] hover:!bg-[#ebebeb]"
                                        key={index}
                                    >
                                        <TableBodyRowChild nonCapitalize className="w-[10px]">
                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-sm border-[2px] border-[#49454F] transition-all duration-300 ease-in-out checked:border-transparent checked:bg-[#6B7AE3] focus:outline-none"
                                                />
                                            </label>
                                        </TableBodyRowChild>

                                        <TableBodyRowChild nonCapitalize>
                                            <span className="text-sm font-medium text-[#A1A1A1]">{item.userName}</span>
                                        </TableBodyRowChild>

                                        <TableBodyRowChild>{item.creationTime}</TableBodyRowChild>
                                    </TableBodyRow>
                                ))}
                            </>
                        )}
                    </>
                </TableBodyContainer>
            </TableLayout>
        </div>
    );
};

const userData = [
    {
        id: 1,
        userName: "Soneye Jade",
        creationTime: "15 days ago",
    },
];
