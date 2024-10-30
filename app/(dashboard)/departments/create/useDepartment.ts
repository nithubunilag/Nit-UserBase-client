"use cient";
import { makeToast } from "@/libs/react-toast";
import { userService } from "@/services/users/user.service";
import { ROUTES } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { z } from "zod";

export const useDepartment = () => {
    const router = useRouter();

    const { mutateAsync: createDepartment, isLoading: creatingDepartment } = useMutation({
        mutationFn: (data: string) => userService.createDepartment(data),

        onSuccess: (data) => {
            router.push(ROUTES.dashboard.DEPARTMENT);
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

    const createTeamMemberForm = useForm<CreateDepartmentSchemaType>({
        resolver: zodResolver(createDepartmentSchema),
    });

    const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const data = createTeamMemberForm.getValues();

        createDepartment(data.name);
    };

    return {
        form: createTeamMemberForm,
        submitting: creatingDepartment,
        onSubmit,
    };
};
