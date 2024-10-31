import { Button, SideDrawer } from "@/components/custom-ui";
import { Input } from "@/components/custom-ui/form";
import { Table } from "@/components/custom-ui/table";
import { makeToast } from "@/libs/react-toast";
import { userService } from "@/services/users/user.service";
import { CACHE_KEYS } from "@/utils/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEventHandler } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { z } from "zod";
import { GenericTableWrapper } from "../tables";

interface SideDrawerProps {
    drawerTrigger: boolean;
    handleClose: () => void;
}

export const AssignUserToProjectDrawer = (props: SideDrawerProps) => {
    const { drawerTrigger, handleClose } = props;

    const {
        isLoading: fetchingUsers,
        refetch: fetchAllUsers,
        data: apiUsers,
    } = useQuery({
        refetchOnWindowFocus: false,
        queryKey: [CACHE_KEYS.ALL_TEAM],
        queryFn: () => userService.getAllUsers(),
        onError: (error: any) => {
            makeToast({
                message: "Error Retrieving Users. Please Contact Support",
                type: "error",
                id: "users-error",
            });

            closeDrawer();
        },
    });

    const { mutateAsync: createDepartment, isLoading: creatingDepartment } = useMutation({
        mutationFn: (data: string) => userService.createDepartment(data),

        onSuccess: (data) => {
            closeDrawer();
        },

        onError: (error: any) => {
            makeToast({
                message: error?.response?.data?.message,
                type: "error",
                id: "create-department-error",
            });
        },
    });

    const createDepartmentSchema = z.object({
        name: z.string(),
    });

    type CreateDepartmentSchemaType = z.infer<typeof createDepartmentSchema>;

    const {
        getValues,
        register,
        formState: { errors },
        reset,
    } = useForm<CreateDepartmentSchemaType>({
        resolver: zodResolver(createDepartmentSchema),
    });

    const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const data = getValues();

        createDepartment(data.name);
    };

    const closeDrawer = () => {
        reset();
        handleClose();
    };

    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
        { value: "option5", label: "Option 5" },
    ];

    const handleChange = (selectedOption: any | null) => {
        console.log("Selected option:", selectedOption);
    };

    return (
        <SideDrawer drawerTrigger={drawerTrigger} handleClose={closeDrawer}>
            <div className="mx-auto w-[85%] animate-fade-in py-10">
                <h2 className="text-2xl font-semibold text-secondary">Assign Project</h2>

                <p className="my-2 text-base font-medium text-[#646464]">Input the correct details in the fields below;</p>

                <form className="mt-7" onSubmit={onSubmit}>
                    <div className="my-5 flex flex-row flex-wrap items-center gap-x-8 gap-y-8">
                        <div className="flex-1">
                            <Input
                                required
                                name="name"
                                label="Department Name"
                                register={register}
                                placeholder="Frontend Development"
                                error={errors?.name ? errors.name.message : undefined}
                            />
                        </div>
                    </div>

                    {/* <SearchableDropdown options={options} placeholder="Select an option" onChange={handleChange} /> */}
                    <div className="my-16 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div className="flex items-center gap-3">
                            <Button label="Back" variant="outlined" onClick={closeDrawer} />

                            <Button label="Submit" variant="contained" type="submit" loading={creatingDepartment} />
                        </div>
                    </div>
                </form>

                <GenericTableWrapper
                    data={apiUsers?.data ?? []}
                    isLoading={fetchingUsers}
                    skeletonRows={5}
                    showCheckbox={true}
                    onRowClick={(item) => console.log(item)}
                    tableHead={["Name"]}
                >
                    {(item) => (
                        <>
                            <Table.Cell>{item.fullName}</Table.Cell>
                        </>
                    )}
                </GenericTableWrapper>

                {/* <Table>
                    <Table.Head>
                        <Table.HeaderCell>
                            <input
                                type="checkbox"
                                // onChange={handleSelectAll}
                                // checked={selectedItems?.length === currentItems.length && currentItems.length > 0}
                                className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-sm border-[2px] border-[#49454F] transition-all duration-300 ease-in-out checked:border-transparent checked:bg-secondary focus:outline-none"
                            />
                        </Table.HeaderCell>

                        <Table.HeaderCell>Name</Table.HeaderCell>
                    </Table.Head>

                    <Table.Body>
                        <Table.Row
                            key={index}
                            onClick={() => onRowClick && onRowClick(item)}
                            className="animate-fade-in !cursor-pointer border-l-[4px] border-transparent transition-all duration-300 ease-in-out hover:border-l-[#232e7d] hover:!bg-[#ebebeb]"
                        >
                            {showCheckbox && (
                                <Table.Cell nonCapitalize className="w-[10px]">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedItems.includes(item)}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleSelectItem(item, e.target.checked);
                                            }}
                                            className="h-[18px] w-[18px] cursor-pointer appearance-none rounded-sm border-[2px] border-[#49454F] transition-all duration-300 ease-in-out checked:border-transparent checked:bg-secondary focus:outline-none"
                                        />
                                    </label>
                                </Table.Cell>
                            )}
                            <>{children(item)}</>
                        </Table.Row>
                    </Table.Body>
                </Table> */}

                
            </div>
        </SideDrawer>
    );
};
