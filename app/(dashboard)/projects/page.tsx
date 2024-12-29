"use client";
import { CreateProjectSideDrawer } from "@/components/composite-ui/sidedrawers";
import { GenericTableWrapper } from "@/components/composite-ui/tables";
import { Button, Header, Search } from "@/components/custom-ui";
import { Table } from "@/components/custom-ui/table";
import { makeToast } from "@/libs/react-toast";
import { RefreshIcon } from "@/public/icons";
import { userService } from "@/services/users/user.service";
import { CACHE_KEYS, ROUTES } from "@/utils/constants";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Project } from "../model";

const Projects = () => {
    const {
        isLoading: fetchingProjects,
        refetch: fetchAllProjects,
        data: apiProjects,
    } = useQuery({
        queryKey: [CACHE_KEYS.PROJECT],
        queryFn: () => userService.getAllProjects(),

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
                message: "Error Retrieving Projects. Please Contact Support",
                type: "error",
                id: "project-error",
            });
        },
    });

    useEffect(() => {
        setProjects(apiProjects?.data ?? []);
    }, [apiProjects]);

    const [projects, setProjects] = useState<Project[]>([]);

    const [createProject, setCreateProject] = useState(false);

    const router = useRouter();

    return (
        <div>
            <div className="mb-10 flex flex-col justify-between gap-9 md:flex-row md:items-center">
                <Header message="Projects" />

                <div className="flex flex-col gap-4 md:flex-row">
                    <button className="group rounded-[4px] hidden md:block border border-secondary px-[14px]" onClick={() => fetchAllProjects()}>
                        <RefreshIcon
                            className={`${fetchingProjects ? "animate-spin" : ""} transition-all duration-300 ease-in-out group-hover:scale-110`}
                        />
                    </button>

                    <Button variant="contained" onClick={() => setCreateProject(true)} className="text-sm font-semibold" label="Create New Project" />

                    <Search initialState={projects} setState={setProjects} conditionKeyword="name" resetState={apiProjects?.data ?? []} />
                </div>
            </div>

            <GenericTableWrapper
                data={projects}
                skeletonRows={5}
                isLoading={fetchingProjects}
                onRowClick={(item) => router.push(`/projects/${item.id}`)}
                tableHead={["Name", "Description", "Status", "CreatedAt"]}
            >
                {(item) => (
                    <>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.description?.slice(0, 10) + "..."}</Table.Cell>
                        <Table.Cell>
                            <span
                                className={`rounded-full px-3 py-1 text-white ${
                                    item.status === "completed" ? "bg-green-500" : item.status === "pending" ? "bg-yellow-500" : "bg-[#37449F]"
                                }`}
                            >
                                {item.status}
                            </span>
                        </Table.Cell>
                        <Table.Cell>{item?.createdAt?.split("T")[0]}</Table.Cell>
                    </>
                )}
            </GenericTableWrapper>

            <CreateProjectSideDrawer
                drawerTrigger={createProject}
                handleClose={() => {
                    setCreateProject(false);
                    fetchAllProjects();
                }}
            />
        </div>
    );
};

export default Projects;
