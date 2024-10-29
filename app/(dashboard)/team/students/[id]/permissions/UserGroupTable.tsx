import { TableBodyContainer, TableBodyRow, TableBodyRowChild, TableHead, TableHeadContainer, TableLayout } from "@/components/custom-ui/Table";
import { TablePagination } from "@/components/custom-ui/Table/TablePagination";
import { usePagination } from "hooks/useTablePagination";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

export const UserGroupTable = () => {
    const tableHead = ["Group Name", "Creation Time"];

    const router = useRouter();

    const { currentItems, currentPage, nextPage, prevPage, totalPages, goToPage, totalDataLength } = usePagination(userGroupData, 10);
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
                        {userGroupData?.length === 0 && (
                            <tr className="!bg-transparent ">
                                <td colSpan={tableHead.length + 1}>No Applicants</td>
                            </tr>
                        )}

                        {userGroupData?.length > 0 && (
                            <>
                                {currentItems?.map((item, index) => (
                                    <TableBodyRow
                                        className="
                    !cursor-pointer border-l-[4px] border-transparent transition-all duration-300  ease-in-out hover:border-l-[#232e7d] hover:!bg-[#ebebeb]"
                                        key={index}
                                        onClick={() => router.push(`/permissions/user-groups/${item.id}`)}
                                    >
                                        <TableBodyRowChild nonCapitalize className="w-[10px]">
                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-sm border-[2px] border-[#49454F] transition-all duration-300 ease-in-out checked:border-transparent checked:bg-[#6B7AE3] focus:outline-none"
                                                />
                                            </label>
                                        </TableBodyRowChild>

                                        <TableBodyRowChild nonCapitalize className="flex items-center gap-4">
                                            <span className="text-sm font-semibold tracking-wide text-[#6B7AE3] underline underline-offset-4">
                                                {item.groupName}
                                            </span>
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

const userGroupData = [
    {
        id: 1,
        groupName: "Eks-user",
        creationTime: "15 days ago",
    },
];
