"use client";
import { GenericTableWrapper } from "@/components/composite-ui/tables";
import { Header, Search } from "@/components/custom-ui";
import { Table } from "@/components/custom-ui/table";
import { Tab, TabList, TabPanel, Tabs } from "@/components/custom-ui/tabs";
import { makeToast } from "@/libs/react-toast";
import { userService } from "@/services/users/user.service";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useQuery } from "react-query";
import { User } from "../../model";

const Project = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);

    const { isLoading: fetchingProject, data: apiProject } = useQuery({
        queryFn: () => userService.getSingleProject(id),

        onSuccess(data) {
            console.log(data);
        },

        onError: () => {
            makeToast({
                message: "Failed to fetch project",
                type: "error",
                id: "fetch-project-details-error",
            });

            router.push("/projects");
        },
    });

    const router = useRouter();

    const [projectUsers, setProjectUsers] = useState<User[]>(apiProject?.data.users ?? []);

    useEffect(() => {
        setProjectUsers(apiProject?.data.users ?? []);
    }, [apiProject?.data.users]);

    if (!id) router.push("/projects");

    return (
        <>
            {fetchingProject && (
                <main className="animate-fade-in">
                    <div>
                        <div className="mb-2 flex items-center gap-4">
                            <div className="h-9 w-9 animate-pulse rounded-full bg-gray-200" />
                            <div className="h-7 w-48 animate-pulse rounded bg-gray-200" />
                        </div>
                        <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                    </div>

                    <div className="my-8 grid grid-cols-4 items-center justify-between gap-y-8 md:w-[100%]">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index}>
                                <div className="mb-2 h-4 w-24 animate-pulse rounded bg-gray-200" />
                                <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                            </div>
                        ))}
                    </div>
                </main>
            )}

            {!fetchingProject && (
                <main className="animate-fade-in">
                    <div>
                        <div className="mb-2 flex items-center gap-4">
                            <button
                                onClick={() => router.push("/team")}
                                className="group cursor-pointer rounded-full border border-[#6B7AE3] p-2 transition-all duration-300 ease-in-out hover:bg-[#6B7AE3] hover:text-white"
                            >
                                <FaChevronLeft className="text-base text-secondary transition-all duration-300 ease-in-out group-hover:text-white" />
                            </button>

                            <Header message={apiProject?.data.name ?? "Dummy Project"} />
                        </div>
                        <p className="text-sm font-normal text-[#797979]">{apiProject?.data.id}</p>
                    </div>

                    <div className="my-8 grid  grid-cols-4 items-center justify-between gap-y-8 md:w-[100%]">
                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">ID</h5>
                            <p className="text-sm font-normal text-[#797979]">{apiProject?.data.id}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Project name</h5>
                            <p className="text-sm font-normal text-[#797979]">{apiProject?.data.name}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Project Description</h5>
                            <p className="ttext-[#797979] text-sm font-normal">{apiProject?.data.description}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Status</h5>
                            <p className="text-sm font-normal capitalize text-[#797979]">{apiProject?.data.status}</p>
                        </div>
                    </div>
                </main>
            )}

            <Tabs>
                <TabList className="mb-8 flex items-center justify-between gap-2">
                    <div>
                        <Tab>Users</Tab>
                    </div>

                    <div className="flex gap-4">
                        <Search conditionKeyword="fullName" initialState={projectUsers} setState={setProjectUsers} resetState={[]} />
                    </div>
                </TabList>


                <TabPanel>
                    <GenericTableWrapper
                        data={projectUsers}
                        skeletonRows={5}
                        isLoading={fetchingProject}
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
                </TabPanel>
            </Tabs>
        </>
    );
};

export default Project;
