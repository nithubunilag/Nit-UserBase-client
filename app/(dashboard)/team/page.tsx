"use client";
import {GenericTableWrapper} from "@/components/composite-ui/tables";
import { Button, Header, Search } from "@/components/custom-ui";
import { Table } from "@/components/custom-ui/table";
import { makeToast } from "@/libs/react-toast";
import { RefreshIcon } from "@/public/icons";
import { userService } from "@/services/users/user.service";
import { CACHE_KEYS, ROUTES } from "@/utils/constants";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { User } from "../model";

const Team = () => {
    const {
        isLoading: fetchingUsers,
        refetch: fetchAllUsers,
        data: apiUsers,
    } = useQuery({
        queryKey: [CACHE_KEYS.ALL_TEAM],
        queryFn: userService.getAllUsers,

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
                message: "Error Retrieving Users. Please Contact Support",
                type: "error",
                id: "users-error",
            });
        },
    });

    useEffect(() => {
        setUsers(apiUsers?.data ?? []);
    }, [apiUsers]);

    const [users, setUsers] = useState<User[]>([]);

    return (
        <div>
            <div className="mb-10 flex items-center justify-between gap-[10px]">
                <div className="flex w-[40%] items-center justify-between">
                    <Header message="Team" />
                </div>

                <div className="flex gap-4">
                    <button className="group rounded-[4px] border border-secondary px-[14px]" onClick={() => fetchAllUsers()}>
                        <RefreshIcon
                            className={`${fetchingUsers ? "animate-spin" : ""} transition-all duration-300 ease-in-out group-hover:scale-110`}
                        />
                    </button>

                    <Button
                        variant="contained"
                        label={
                            <Link href="/team/create" className="text-sm">
                                Add Team Member
                            </Link>
                        }
                    />

                    <Search initialState={users} setState={setUsers} conditionKeyword="fullName" resetState={apiUsers?.data ?? []} />
                </div>
            </div>

            <GenericTableWrapper
                data={users}
                skeletonRows={5}
                showCheckbox={false}
                isLoading={fetchingUsers}
                onRowClick={(item) => console.log("Row clicked:", item)}
                tableHead={["Full Name", "Email Address", "Phone Number", "Gender", "Role", "Department"]}
            >
                {(item) => (
                    <>
                        <Table.Cell>{item.fullName}</Table.Cell>
                        <Table.Cell nonCapitalize>{item.emailAddress}</Table.Cell>
                        <Table.Cell>{item.phoneNumber}</Table.Cell>
                        <Table.Cell>{item.gender}</Table.Cell>
                        <Table.Cell>{item.role?.name}</Table.Cell>
                        <Table.Cell>{item.department?.name}</Table.Cell>
                    </>
                )}
            </GenericTableWrapper>
        </div>
    );
};

export default Team;
