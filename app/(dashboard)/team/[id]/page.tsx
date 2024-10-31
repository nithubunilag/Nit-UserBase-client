"use client";
import { AssignProjectsToUserSideDrawer } from "@/components/composite-ui/sidedrawers";
import { GenericTableWrapper } from "@/components/composite-ui/tables";
import { Button, Header } from "@/components/custom-ui";
import { Table } from "@/components/custom-ui/table";
import { Tab, TabList, TabPanel, Tabs } from "@/components/custom-ui/tabs";
import { makeToast } from "@/libs/react-toast";
import { RefreshIcon } from "@/public/icons";
import { userService } from "@/services/users/user.service";
import { useRouter } from "next/navigation";
import { use, useEffect, useMemo, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useQuery } from "react-query";
import { Project } from "../../model";

const User = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);

    // Fetch User Attendance
    // Fetch User Employment Timeline

    const {
        isLoading,
        isRefetching,
        data: apiUser,
        refetch: fetchUser,
    } = useQuery({
        queryFn: () => userService.getSingleUser(id),

        onError: () => {
            makeToast({
                message: "Failed to fetch user details",
                type: "error",
                id: "fetch-user-details-error",
            });

            router.push("/team");
        },
    });

    const router = useRouter();

    const [assignProjectModal, setAssignProjectModal] = useState<boolean>(false);

    const fetchingUser = useMemo(() => isLoading || isRefetching, [isLoading, isRefetching]);

    const [currentTab, setCurrentTab] = useState<"attendance" | "projects" | "timeline">("attendance");

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(apiUser?.data.user.projects ?? []);
    }, [apiUser?.data]);

    if (!id) router.push("/team");

    return (
        <>
            {fetchingUser && (
                <main className="animate-fade-in">
                    <div>
                        <div className="mb-2 flex items-center gap-4">
                            <div className="h-9 w-9 animate-pulse rounded-full bg-gray-200" />
                            <div className="h-7 w-48 animate-pulse rounded bg-gray-200" />
                        </div>
                        <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                    </div>

                    <div className="my-8 grid grid-cols-4 items-center justify-between gap-y-8 md:w-[100%]">
                        {Array.from({ length: 14 }).map((_, index) => (
                            <div key={index}>
                                <div className="mb-2 h-4 w-24 animate-pulse rounded bg-gray-200" />
                                <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
                            </div>
                        ))}
                    </div>
                </main>
            )}

            {!fetchingUser && (
                <main className="animate-fade-in">
                    <div>
                        <div className="mb-2 flex items-center gap-4">
                            <button
                                onClick={() => router.push("/team")}
                                className="group cursor-pointer rounded-full border border-[#6B7AE3] p-2 transition-all duration-300 ease-in-out hover:bg-[#6B7AE3] hover:text-white"
                            >
                                <FaChevronLeft className="text-base text-secondary transition-all duration-300 ease-in-out group-hover:text-white" />
                            </button>

                            <Header message={apiUser?.data.user.fullName ?? "Personal Details"} />
                        </div>
                        <p className="text-sm font-normal text-[#797979]">{apiUser?.data.user.id}</p>
                    </div>

                    <div className="my-8 grid  grid-cols-4 items-center justify-between gap-y-8 md:w-[100%]">
                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">ID</h5>
                            <p className="text-sm font-normal text-[#797979]">{apiUser?.data.user.id}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">User name</h5>
                            <p className="text-sm font-normal text-[#797979]">{apiUser?.data.user.fullName}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Email Address</h5>
                            <p className="ttext-[#797979] text-sm font-normal">{apiUser?.data.user.emailAddress}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Gender</h5>
                            <p className="text-sm font-normal capitalize text-[#797979]">{apiUser?.data.user.gender}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Role</h5>
                            <p className="text-sm font-normal capitalize text-[#797979]">{apiUser?.data.user.role?.name}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Department</h5>
                            <p className="text-sm font-normal capitalize text-[#797979]">{apiUser?.data.user.department?.name}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Created At</h5>
                            <p className="text-sm font-normal text-[#797979]">{apiUser?.data.user.createdAt}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Current Address</h5>
                            <p className="text-sm font-normal text-[#797979]">{apiUser?.data.user.currentAddress}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Date of Birth</h5>
                            <p className="text-sm font-normal text-[#797979]">{apiUser?.data.user.dateOfBirth}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Education Level</h5>
                            <p className="text-sm font-normal text-[#797979]">{apiUser?.data.user.educationLevel}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Emergency Contact</h5>
                            <p className="text-sm font-normal text-[#797979]">{apiUser?.data.user.emergencyContact}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">LinkedIn Profile</h5>
                            <p className="text-sm font-normal text-[#797979]">{apiUser?.data.user.linkedinProfile}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Permanent Address</h5>
                            <p className="text-sm font-normal text-[#797979]">{apiUser?.data.user.permanentAddress}</p>
                        </div>

                        <div>
                            <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Phone Number</h5>
                            <p className="text-sm font-normal text-[#797979]">{apiUser?.data.user.phoneNumber}</p>
                        </div>
                    </div>
                </main>
            )}

            <Tabs>
                <TabList className="mb-8 flex items-center justify-between gap-2">
                    <div>
                        <Tab onClick={() => setCurrentTab("projects")}>Projects</Tab>
                        <Tab onClick={() => setCurrentTab("timeline")}>Timeline</Tab>
                        <Tab onClick={() => setCurrentTab("attendance")}>Attendance</Tab>
                    </div>

                    <div className="flex gap-4">
                        <button className="group rounded-[4px] border border-secondary px-[14px]" onClick={() => fetchUser()}>
                            <RefreshIcon
                                className={`${fetchingUser ? "animate-spin" : ""} transition-all duration-300 ease-in-out group-hover:scale-110`}
                            />
                        </button>

                        {currentTab === "projects" && (
                            <Button variant="contained" label="Assign Project" onClick={() => setAssignProjectModal(true)} />
                        )}
                    </div>
                </TabList>

                <TabPanel>
                    <GenericTableWrapper
                        skeletonRows={5}
                        isLoading={fetchingUser}
                        data={projects}
                        onRowClick={(item) => router.push(`/projects/${item.id}`)}
                        tableHead={["Name", "Description", "Status", "Role In Project", "CreatedAt"]}
                    >
                        {(item) => (
                            <>
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>{item.description?.slice(0, 10) + "..."}</Table.Cell>
                                <Table.Cell>
                                    <span
                                        className={`rounded-full px-3 py-1 text-white ${
                                            item.status === "completed"
                                                ? "bg-green-500"
                                                : item.status === "pending"
                                                  ? "bg-yellow-500"
                                                  : "bg-[#37449F]"
                                        }`}
                                    >
                                        {item.status}
                                    </span>
                                </Table.Cell>
                                <Table.Cell>{item?.userProject?.roleInProject ?? "Contributor"}</Table.Cell>
                                <Table.Cell>{item?.createdAt?.split("T")[0]}</Table.Cell>
                            </>
                        )}
                    </GenericTableWrapper>
                </TabPanel>

                <TabPanel>
                    <GenericTableWrapper
                        data={[]}
                        skeletonRows={5}
                        isLoading={false}
                        tableHead={["Date", "Check In", "Check Out", "Status", "Total Hours"]}
                    >
                        {(item) => (
                            <>
                                <Table.Cell>Hello</Table.Cell>
                            </>
                        )}
                    </GenericTableWrapper>
                </TabPanel>
            </Tabs>

            <AssignProjectsToUserSideDrawer drawerTrigger={assignProjectModal} handleClose={() => setAssignProjectModal(false)} userId={id} />
        </>
    );
};

export default User;
