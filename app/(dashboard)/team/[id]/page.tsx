"use client";
import { GenericTableWrapper } from "@/components/composite-ui/tables";
import { Header } from "@/components/custom-ui";
import { Table } from "@/components/custom-ui/table";
import { Tab, TabList, TabPanel, Tabs } from "@/components/custom-ui/tabs";
import { makeToast } from "@/libs/react-toast";
import { userService } from "@/services/users/user.service";
import { useRouter } from "next/navigation";
import { use } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useQuery } from "react-query";

const User = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);

    // Fetch User Personal Details
    // Fetch User Attendance
    // Fetch User Employment Timeline

    const { isLoading: fetchingUser = true, data: apiUser } = useQuery({
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

    if (!id) router.push("/team");

    if (fetchingUser)
        return (
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
        );

    return (
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

            <Tabs>
                <TabList className="mb-8 ">
                    <Tab>Attendance</Tab>
                </TabList>

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
        </main>
    );
};

export default User;
