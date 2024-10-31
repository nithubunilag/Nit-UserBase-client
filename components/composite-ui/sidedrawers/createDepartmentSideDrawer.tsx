import { Button, SideDrawer } from "@/components/custom-ui";
import { Input } from "@/components/custom-ui/form";
import { makeToast } from "@/libs/react-toast";
import { userService } from "@/services/users/user.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormEventHandler } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { z } from "zod";

interface SideDrawerProps {
    drawerTrigger: boolean;
    handleClose: () => void;
}

export const CreateDepartmentSideDrawer = (props: SideDrawerProps) => {
    const { drawerTrigger, handleClose } = props;

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

    return (
        <SideDrawer drawerTrigger={drawerTrigger} handleClose={closeDrawer}>
            <div className="mx-auto w-[85%] animate-fade-in py-10">
                <h2 className="text-2xl font-semibold text-secondary">Create Department</h2>

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

                    <div className="my-16 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div className="flex items-center gap-3">
                            <Button label="Back" variant="outlined" onClick={closeDrawer} />

                            <Button label="Submit" variant="contained" type="submit" loading={creatingDepartment} />
                        </div>
                    </div>
                </form>
            </div>
        </SideDrawer>
    );
};
