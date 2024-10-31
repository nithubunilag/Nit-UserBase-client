"use client";
import { CreateDepartmentSideDrawer } from "@/components/composite-ui/sidedrawers";
import { GenericTableWrapper } from "@/components/composite-ui/tables";
import { Button, Header, PopOver, Search } from "@/components/custom-ui";
import { Table } from "@/components/custom-ui/table";
import { makeToast } from "@/libs/react-toast";
import { RefreshIcon } from "@/public/icons";
import { userService } from "@/services/users/user.service";
import { CACHE_KEYS, ROUTES } from "@/utils/constants";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useQuery } from "react-query";
import { Department } from "../model";

const Departments = () => {
    const {
        isLoading: fetchingDepartments,
        refetch: fetchAllDepartments,
        data: apiDepartments,
    } = useQuery({
        queryKey: [CACHE_KEYS.DEPARTMENT],
        queryFn: userService.getAllDepartments,

        onError: (error: any) => {
            if (error?.response?.status === 401) {
                // Clear Token from cookie
                makeToast({
                    message: "Session expired",
                    type: "error",
                    id: "session-expired",
                });

                return redirect(ROUTES.auth.LOGIN);
            }

            makeToast({
                message: "Error Retrieving Departments. Please Contact Support",
                type: "error",
                id: "department-error",
            });
        },
    });

    useEffect(() => {
        setDepartments(apiDepartments?.data ?? []);
    }, [apiDepartments]);

    const [departments, setDepartments] = useState<Department[]>([]);

    const [createDepartment, setCreateDepartment] = useState(false);

    const [selectedItems, setSelectedItems] = useState<Department[]>([]);

    return (
        <div>
            <div className="mb-10 flex items-center justify-between gap-[10px]">
                <div className="flex w-[40%] items-center justify-between">
                    <Header message="Departments" />
                </div>

                <div className="flex gap-4">
                    <PopOver
                        containerClassname={selectedItems.length > 1 ? "opacity-100" : "opacity-0"}
                        location="bottom"
                        trigger="click"
                        content={
                            <div className=" min-w-[200px] overflow-hidden rounded-lg bg-white shadow-xl">
                                <button className="text=lg flex w-full cursor-pointer items-center gap-3 px-6 py-3 text-[#f28b82] transition-all duration-200 ease-in-out hover:bg-[#f28b82] hover:text-white">
                                    <MdDelete /> Delete Items
                                </button>
                            </div>
                        }
                    >
                        <Button variant="outlined" label={<FaEllipsisVertical />} className="!px-3 !py-4" />
                    </PopOver>

                    <button className="group rounded-[4px] border border-secondary px-[14px]" onClick={() => fetchAllDepartments()}>
                        <RefreshIcon
                            className={`${fetchingDepartments ? "animate-spin" : ""} transition-all duration-300 ease-in-out group-hover:scale-110`}
                        />
                    </button>

                    <Button
                        variant="contained"
                        onClick={() => setCreateDepartment(true)}
                        className="text-sm font-semibold"
                        label="Create New Department"
                    />

                    <Search initialState={departments} setState={setDepartments} conditionKeyword="name" resetState={apiDepartments?.data ?? []} />
                </div>
            </div>

            <GenericTableWrapper
                data={departments}
                skeletonRows={5}
                showCheckbox={departments.length > 0}
                isLoading={fetchingDepartments}
                onRowClick={(item) => console.log("Row clicked:", item)}
                tableHead={["Id", "Name", "CreatedAt"]}
                onSelectionChange={setSelectedItems}
            >
                {(item) => (
                    <>
                        <Table.Cell nonCapitalize>{item.id}</Table.Cell>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item?.createdAt?.split("T")[0]}</Table.Cell>
                    </>
                )}
            </GenericTableWrapper>

            <CreateDepartmentSideDrawer
                drawerTrigger={createDepartment}
                handleClose={() => {
                    setCreateDepartment(false);
                    fetchAllDepartments();
                }}
            />
        </div>
    );
};

export default Departments;
