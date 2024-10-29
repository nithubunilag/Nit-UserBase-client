"use client";
import { PolicyTable, UserGroupTable } from "@/components/composite-ui/tables";
import { Button, Header, PopOver } from "@/components/custom-ui";
import { Tab, TabList, TabPanel, Tabs } from "@/components/custom-ui/tabs";
import { RefreshIcon } from "public/icons";
import { useState } from "react";

const Permissions = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState({
        index: 0,
        name: "policies" as "policies" | "user_group",
    });

    return (
        <main>
            <div className="mb-10">
                <Header message="Permissions" className="mb-2" />
                <p className="text-sm font-normal text-[#797979]">Permissions are defined by policies assigned to that user or through groups </p>
            </div>

            <Tabs
                onSelect={(tabIndex) =>
                    setSelectedTabIndex({
                        ...selectedTabIndex,
                        index: tabIndex,
                        name: tabIndex == 0 ? "policies" : "user_group",
                    })
                }
            >
                <TabList className="mb-8 flex items-center justify-between gap-2">
                    <div>
                        <Tab>Policies</Tab>
                        <Tab>User Groups</Tab>
                    </div>
                    <div className="flex gap-4">
                        <button className=" rounded-[4px] border border-[#646464] px-[14px] ">
                            <RefreshIcon />
                        </button>

                        <PopOver location="bottom" trigger="click" content={<div>Hello</div>}>
                            <Button variant="outlined" title="Disable" disabled />
                        </PopOver>

                        <Button variant="contained" title={`Add ${selectedTabIndex.name === "policies" ? "Policy" : "Group"}`} />
                    </div>
                </TabList>

                <TabPanel>
                    <PolicyTable />
                </TabPanel>
                <TabPanel>
                    <UserGroupTable />
                </TabPanel>
            </Tabs>
        </main>
    );
};

export default Permissions;
