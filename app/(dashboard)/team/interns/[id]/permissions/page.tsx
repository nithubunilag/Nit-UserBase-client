"use client";
import { Button, Header, PopOver } from "@/components/custom-ui";
import { Tab, TabList, TabPanel, Tabs } from "@/components/custom-ui/Tabs";
import { RefreshIcon } from "public/icons";
import { UserGroupTable } from "./UserGroupTable";
import { UserPermisionsTable } from "./UserPermissionsTable";

// export function generateStaticParams() {
//     return [{ id: "1" }, { id: "2" }, { id: "3" }]
// }

const AdminPermissions = ({ params }: { params: { id: string } }) => {
    const { id } = params;

    return (
        <main>
            <div>
                <Header message="Summary" className="mb-2" />
                <p className="text-sm font-normal text-[#797979]">Permissions are defined by policies assigned to that user or through groups </p>
            </div>

            <div className="my-8 grid h-[150px] grid-cols-2 items-center justify-between md:w-1/2">
                <div>
                    <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">User name</h5>
                    <p className="text-sm font-normal text-[#797979]">Soneye Oluwapelumi</p>
                </div>

                <div>
                    <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Last console sign in</h5>
                    <p className="text-sm font-normal  text-[#FF9D00]">1 week ago</p>
                </div>

                <div>
                    <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Date created</h5>
                    <p className="text-sm font-normal text-[#797979]">December 22, 2023 (UTC+01:00)</p>
                </div>
            </div>

            <Tabs>
                <TabList className="mb-8 flex items-center justify-between gap-2">
                    <div>
                        <Tab>Permissions</Tab>
                        <Tab>User Group</Tab>
                    </div>
                    <div className="flex gap-4">
                        <button className=" rounded-[4px] border border-[#646464] px-[14px] ">
                            <RefreshIcon />
                        </button>

                        <PopOver location="bottom" trigger="click" content={<div>Hello</div>}>
                            <Button variant="outlined" title="Disable" disabled />
                        </PopOver>

                        <Button variant="contained" title="Add Permissions" />
                    </div>
                </TabList>

                <TabPanel>
                    <UserPermisionsTable />
                </TabPanel>

                <TabPanel>
                    <UserGroupTable />
                </TabPanel>
            </Tabs>
        </main>
    );
};

export default AdminPermissions;
