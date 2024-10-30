"use client";
import { GenericTableWrapper } from "@/components/composite-ui/tables";
import { Button, Header, Search } from "@/components/custom-ui";
import { Table } from "@/components/custom-ui/table";
import { Tab, TabList, Tabs } from "@/components/custom-ui/tabs";
import { makeToast } from "@/libs/react-toast";
import { RefreshIcon } from "@/public/icons";
import { userService } from "@/services/users/user.service";
import { CACHE_KEYS, ROUTES } from "@/utils/constants";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { User } from "../model";

import { FetchUsersQuerySchema } from "@/services/users/users.interface";
import { FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";

const Team = () => {
    const { isLoading: fetchingRoles, data: userRoles } = useQuery({
        queryKey: [CACHE_KEYS.ROLE],
        queryFn: userService.getAllRoles,
    });

    const [userQueryOptions, setUserQueryOptions] = useState<Partial<FetchUsersQuerySchema>>({});

    const {
        isRefetching,
        isLoading,
        refetch: fetchAllUsers,
        data: apiUsers,
    } = useQuery({
        refetchOnWindowFocus: false,
        queryKey: [CACHE_KEYS.ALL_TEAM, userQueryOptions],
        queryFn: () => userService.getAllUsers(userQueryOptions),
        onError: (error: any) => {
            if (error?.response?.status === 401) {
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

    const fetchingUsers = useMemo(() => isLoading || isRefetching, [isLoading, isRefetching]);

    useEffect(() => {
        setUsers(apiUsers?.data ?? []);
    }, [apiUsers]);

    const [users, setUsers] = useState<User[]>([]);

    const router = useRouter();

    const handleClickRole = (role: string) => {
        if (role === "All") {
            setUserQueryOptions({ ...userQueryOptions, role: undefined });

            return fetchAllUsers();
        }

        const selectedRole = userRoles?.data?.find((item) => item.name.toLowerCase() === role.toLowerCase());

        if (!selectedRole) return;

        setUserQueryOptions({ ...userQueryOptions, role: selectedRole?.id });

        fetchAllUsers();
    };

    const handleSort = () => {
        const newSortOrder = userQueryOptions.sortOrder === "asc" ? "desc" : "asc";
        setUserQueryOptions({ ...userQueryOptions, sortOrder: newSortOrder });
        fetchAllUsers();
    };

    return (
        <div>
            <div className="mb-12 flex items-center justify-between">
                <Header message="Team" />
                <Search initialState={users} setState={setUsers} conditionKeyword="fullName" resetState={apiUsers?.data ?? []} />
            </div>

            <Tabs>
                <TabList className="mb-8 flex items-center justify-between gap-2">
                    <div>
                        <Tab onClick={() => handleClickRole("All")}>All</Tab>
                        <Tab onClick={() => handleClickRole("Employee")}>Employees</Tab>
                        <Tab onClick={() => handleClickRole("Intern")}>Interns</Tab>
                        <Tab onClick={() => handleClickRole("Student")}>Students</Tab>
                        <Tab onClick={() => handleClickRole("Volunteer")}>Volunteer</Tab>
                    </div>

                    <div className="flex gap-4">
                        <button className="group rounded-[4px] border border-secondary px-[14px]" onClick={() => fetchAllUsers()}>
                            <RefreshIcon
                                className={`${fetchingUsers ? "animate-spin" : ""} transition-all duration-300 ease-in-out group-hover:scale-110`}
                            />
                        </button>

                        <Button
                            variant="outlined"
                            disabled={fetchingUsers}
                            onClick={handleSort}
                            label={
                                <span className=" flex items-center gap-2 text-sm font-semibold">
                                    Sort
                                    {userQueryOptions.sortOrder === "asc" ? (
                                        <FaSortAlphaUpAlt className="animate-fade-in text-lg text-secondary transition-all duration-300 ease-in-out group-hover:text-white" />
                                    ) : (
                                        <FaSortAlphaDown className="animate-fade-in text-lg text-secondary transition-all duration-300 ease-in-out group-hover:text-white" />
                                    )}
                                </span>
                            }
                        />

                        <Button
                            variant="contained"
                            label={
                                <Link href="/team/create" className="text-sm">
                                    Add Team Member
                                </Link>
                            }
                        />
                    </div>
                </TabList>

                <GenericTableWrapper
                    data={users}
                    skeletonRows={5}
                    isLoading={fetchingUsers || fetchingRoles}
                    onRowClick={(item) => router.push(`/team/${item.id}`)}
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
            </Tabs>
        </div>
    );
};

export default Team;
