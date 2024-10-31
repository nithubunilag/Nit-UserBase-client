import { Project } from "@/app/(dashboard)/model";
import { Button, SideDrawer } from "@/components/custom-ui";
import { Select } from "@/components/custom-ui/form";
import { Table } from "@/components/custom-ui/table";
import { makeToast } from "@/libs/react-toast";
import { userService } from "@/services/users/user.service";
import { CACHE_KEYS } from "@/utils/constants";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { GenericTableWrapper } from "../tables";

interface SideDrawerProps {
    drawerTrigger: boolean;
    handleClose: () => void;
    userId: string;
}

export const AssignProjectsToUserSideDrawer = (props: SideDrawerProps) => {
    const { drawerTrigger, handleClose, userId } = props;

    const [selectedItems, setSelectedItems] = useState<Project[]>([]);

    const { isLoading: fetchingProjects, data: apiProjects } = useQuery({
        queryKey: [CACHE_KEYS.PROJECT],
        queryFn: () => userService.getAllProjects(),
        onError: () => {
            makeToast({
                message: "Error Retrieving Projects. Please Contact Support",
                type: "error",
                id: "project-error",
            });

            closeDrawer();
        },
    });

    const { mutateAsync: assignProjects, isLoading: assigningProjects } = useMutation({
        mutationFn: (projectIds: string[]) => userService.assignProjectsToUser(userId, projectIds),

        onSuccess: (data) => {
            console.log(data);
            // closeDrawer();
        },

        onError: () => {
            makeToast({
                message: "Error Assigning Projects. Please Contact Support",
                type: "error",
                id: "assign-project-error",
            });
        },
    });

    const closeDrawer = () => {
        setSelectedItems([]);
        handleClose();
    };

    const ProjectRoles = [
        {
            label: "Project Manager",
            value: "project-manager",
        },
    ];

    return (
        <SideDrawer drawerTrigger={drawerTrigger} handleClose={closeDrawer}>
            <div className="mx-auto w-[85%] animate-fade-in py-10">
                <h2 className="text-2xl font-semibold text-secondary">Assign Project</h2>

                <p className="my-2 text-base font-medium text-[#646464]">Select the Projects you want to assign to the user</p>

                <div className="my-16">
                    <GenericTableWrapper
                        data={apiProjects?.data ?? []}
                        isLoading={fetchingProjects}
                        skeletonRows={5}
                        showCheckbox={true}
                        onRowClick={(item) => console.log(item)}
                        tableHead={["Name"]}
                        onSelectionChange={(selectedItems) => setSelectedItems(selectedItems)}
                    >
                        {(item) => (
                            <>
                                <Table.Cell>{item.name}</Table.Cell>
                            </>
                        )}
                    </GenericTableWrapper>
                </div>

                <div className="my-16 flex flex-col justify-between gap-8">
                    <Select name="project" label="Project Role" options={ProjectRoles} />

                    <div className="flex items-center gap-3">
                        <Button label="Back" variant="outlined" onClick={closeDrawer} />

                        <Button
                            label="Assign Projects"
                            variant="contained"
                            onClick={() => assignProjects(selectedItems.map((item) => item.id))}
                            loading={assigningProjects}
                        />
                    </div>
                </div>
            </div>
        </SideDrawer>
    );
};
