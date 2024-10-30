"use client";
import { Button, Header, PopOver } from "@/components/custom-ui";
import { TableBodyContainer, TableBodyRow, TableBodyRowChild, TableHead, TableHeadContainer, TableLayout } from "@/components/custom-ui/Table";
import { TablePagination } from "@/components/custom-ui/Table/TablePagination";
import { usePagination } from "@/hooks";
import { getAsset } from "@/utils/getAsset";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RefreshIcon } from "public/icons";
import { CiSearch } from "react-icons/ci";

const Employees = () => {
    const router = useRouter();

    const getStatus = (status: "enabled" | "disabled") => {
        switch (status) {
            case "disabled":
                return "!text-[#EEA738] text-capitalize";
            case "enabled":
                return "!text-[#37C85C] text-capitalize";
            default:
                return "!text-[#EF233C]";
        }
    };

    const adminsTableHead = ["Name", "Email", "No of groups", "Last Sign in", "Status"];

    const { currentItems, currentPage, nextPage, prevPage, totalPages, goToPage, totalDataLength } = usePagination(adminsData, 8);

    return (
        <div>
            <div className="mb-10 flex items-center justify-between gap-[10px]">
                <div className="flex w-[40%] items-center justify-between">
                    <Header message="Admins" />

                    <div className="relative flex items-center gap-4 rounded-lg border border-[#DFDFDF] bg-transparent p-2 md:min-w-[300px]">
                        <CiSearch className="text-3xl font-bold text-[#CACACA]" />
                        <input
                            type="text"
                            className="relative border-none bg-transparent text-sm outline-none placeholder:text-sm placeholder:text-[#A1A1A1]"
                            placeholder="Search"
                        />
                    </div>
                </div>

                <div className="flex gap-4">
                    <button className=" rounded-[4px] border border-[#646464] px-[14px] ">
                        <RefreshIcon />
                    </button>

                    <PopOver location="bottom" trigger="click" content={<div>Hello</div>}>
                        <Button variant="outlined" label="Disable" disabled />
                    </PopOver>

                    <Button variant="contained" label="Add Admins" onClick={() => router.push("/user/admins/create")} />
                </div>
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
                        {adminsTableHead.map((head) => (
                            <TableHead label={head} key={head} />
                        ))}
                    </>
                </TableHeadContainer>

                <TableBodyContainer>
                    <>
                        {adminsData?.length === 0 && (
                            <tr className="!bg-transparent ">
                                <td colSpan={adminsTableHead.length + 1}>No Applicants</td>
                            </tr>
                        )}

                        {adminsData?.length > 0 && (
                            <>
                                {currentItems?.map((item, index) => (
                                    <TableBodyRow
                                        className="
                    !cursor-pointer border-l-[4px] border-transparent transition-all duration-300  ease-in-out hover:border-l-[#232e7d] hover:!bg-[#ebebeb]"
                                        onClick={() => router.push(`/user/admins/${item.id}/permissions`)}
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

                                        <TableBodyRowChild nonCapitalize className="flex items-center gap-4">
                                            <div className="h-[32px] w-[32px]">
                                                <Image width={32} height={32} alt="avatar" src={item.avatar} className="h-full w-full rounded-full" />
                                            </div>

                                            <span className="text-sm font-semibold tracking-wide text-[#6B7AE3] underline underline-offset-4">
                                                {item.name}
                                            </span>
                                        </TableBodyRowChild>

                                        <TableBodyRowChild nonCapitalize>{item.email}</TableBodyRowChild>
                                        <TableBodyRowChild>{item.noOfGroups}</TableBodyRowChild>
                                        <TableBodyRowChild nonCapitalize>{item.date}</TableBodyRowChild>
                                        <TableBodyRowChild className={getStatus(item.status as any)}>{item.status}</TableBodyRowChild>
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

export default Employees;

const adminsData = [
    {
        id: 1,
        name: "Yinka",
        avatar: getAsset("dummyAvatar.png", "images"),
        email: "daidokunoye003@gmail.com",
        date: "April 2, 2022",
        noOfGroups: 2,
        status: "enabled",
    },
    {
        id: 2,
        name: "David Okunoye",
        avatar: getAsset("femaleAvatar.svg", "images"),
        email: "david123@gmail.com",
        date: "April 2, 2022",
        noOfGroups: 5,
        status: "disabled",
    },
    {
        id: 3,
        name: "David Okunoye",
        avatar: getAsset("taiwo2.png", "images"),
        email: "david123@gmail.com",
        date: "April 2, 2022",
        noOfGroups: 18,
        status: "enabled",
    },
    {
        id: 4,
        name: "David Okunoye",
        avatar: getAsset("dummyAvatar.png", "images"),
        email: "david123@gmail.com",
        date: "April 2, 2022",
        noOfGroups: 3,
        status: "enabled",
    },
    {
        id: 5,
        name: "David Okunoye",
        avatar: getAsset("femaleAvatar.svg", "images"),
        email: "david123@gmail.com",
        date: "April 2, 2022",
        noOfGroups: 5,
        status: "disabled",
    },
    {
        id: 6,
        name: "David Okunoye",
        avatar: getAsset("taiwo2.png", "images"),
        email: "david123@gmail.com",
        date: "April 2, 2022",
        noOfGroups: 18,
        status: "enabled",
    },
    {
        id: 7,
        name: "David Okunoye",
        avatar: getAsset("dummyAvatar.png", "images"),
        email: "david123@gmail.com",
        date: "April 2, 2022",
        noOfGroups: 3,
        status: "enabled",
    },
    {
        id: 8,
        name: "David Okunoye",
        avatar: getAsset("femaleAvatar.svg", "images"),
        email: "david123@gmail.com",
        date: "April 2, 2022",
        noOfGroups: 5,
        status: "disabled",
    },
    {
        id: 9,
        name: "David Okunoye",
        avatar: getAsset("taiwo2.png", "images"),
        email: "david123@gmail.com",
        date: "April 2, 2022",
        noOfGroups: 18,
        status: "enabled",
    },
    {
        id: 10,
        name: "David Okunoye",
        avatar: getAsset("dummyAvatar.png", "images"),
        email: "david123@gmail.com",
        date: "April 2, 2022",
        noOfGroups: 3,
        status: "enabled",
    },
];
