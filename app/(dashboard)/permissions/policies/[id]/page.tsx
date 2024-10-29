"use client";
import { Button, Header, PopOver } from "@/components/custom-ui";
import { PolicyUsers, UserGroupTable } from "@/components/composite-ui/tables";
import { Tab, TabList, TabPanel, Tabs } from "@/components/custom-ui/tabs";
import { RefreshIcon } from "public/icons";

const PolicyInformation = () => {
    return (
        <main>
            <div>
                <Header message="Summary" className="mb-2" />
                <p className="text-sm font-normal text-[#797979]">Permissions are defined by policies assigned to that user or through groups </p>
            </div>

            <div className="grid h-[150px] grid-cols-2 items-center justify-between md:w-1/2">
                <div>
                    <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Policy name</h5>
                    <p className="text-sm font-normal text-[#797979]">RegistryFullAccess</p>
                </div>

                <div>
                    <h5 className="mb-2 text-sm font-medium text-[#6B7AE3]">Date created</h5>
                    <p className="text-sm font-normal text-[#797979]">December 22, 2023 (UTC+01:00)</p>
                </div>
            </div>

            <Tabs>
                <TabList className="mb-8 flex items-center justify-between gap-2">
                    <div>
                        <Tab>User</Tab>
                        <Tab>User Group</Tab>
                    </div>
                    <div className="flex gap-4">
                        <button className=" rounded-[4px] border border-[#646464] px-[14px] ">
                            <RefreshIcon />
                        </button>

                        <PopOver location="bottom" trigger="click" content={<div>Hello</div>}>
                            <Button variant="outlined" title="Disable" disabled />
                        </PopOver>

                        <Button variant="contained" title="Add Users" />
                    </div>
                </TabList>

                <TabPanel>
                    <PolicyUsers />
                </TabPanel>

                <TabPanel>
                    <UserGroupTable />
                </TabPanel>
            </Tabs>
        </main>
    );
};

export default PolicyInformation;
