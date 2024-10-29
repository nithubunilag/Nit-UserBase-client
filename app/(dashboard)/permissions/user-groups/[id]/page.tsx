"use client";

import { PolicyTable, UserTable } from "@/components/composite-ui/tables";
import { Button, Header, PopOver } from "@/components/custom-ui";
import { Tab, TabList, TabPanel, Tabs } from "@/components/custom-ui/tabs";
import { RefreshIcon } from "public/icons";
import { useState } from "react";

const UserGroupInformation = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState({
        index: 0,
        name: "policies" as "policies" | "users",
    });
    return (
        <main>
            <div>
                <Header message="Summary" className="mb-2" />
                <p className="text-sm font-normal text-[#797979]">Permissions are defined by policies assigned to that user or through groups </p>
            </div>

            <div className="grid h-[150px] grid-cols-2 items-center justify-between md:w-1/2">
                <div>
                    <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">User Group name</h5>
                    <p className="text-sm font-normal text-[#797979]">Eks-user</p>
                </div>

                <div>
                    <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Date created</h5>
                    <p className="text-sm font-normal text-[#797979]">December 22, 2023 (UTC+01:00)</p>
                </div>
            </div>

            <Tabs
                onSelect={(tabIndex) =>
                    setSelectedTabIndex({
                        ...selectedTabIndex,
                        index: tabIndex,
                        name: tabIndex == 0 ? "policies" : "users",
                    })
                }
            >
                <TabList className="mb-8 flex items-center justify-between gap-2">
                    <div>
                        <Tab>Policies</Tab>
                        <Tab>Users</Tab>
                    </div>
                    <div className="flex gap-4">
                        <button className=" rounded-[4px] border border-[#646464] px-[14px] ">
                            <RefreshIcon />
                        </button>
                        <PopOver location="bottom" trigger="click" content={<div>Hello</div>}>
                            <Button variant="outlined" title="Disable" disabled />
                        </PopOver>
                        <Button variant="contained" title={`Add ${selectedTabIndex.name === "policies" ? "Policy" : "User"}`} />
                    </div>
                </TabList>

                <TabPanel>
                    <PolicyTable />
                </TabPanel>

                <TabPanel>
                    <UserTable />
                </TabPanel>
            </Tabs>
        </main>
    );
};

export default UserGroupInformation;
