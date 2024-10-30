"use cient";
import { IDropdownItem } from "@/components/custom-ui/form/Select";
import { makeToast } from "@/libs/react-toast";
import { userService } from "@/services/users/user.service";
import { ICreateUserRequest } from "@/services/users/users.interface";
import { CACHE_KEYS, removeEmptyKeys, ROUTES } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormEventHandler, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { z } from "zod";
import { EducationLevel, UserGender } from "../../model";

export const useCreateTeamMember = () => {
    const router = useRouter();

    const { isLoading: fetchingRoles, data: userRoles } = useQuery({
        queryKey: [CACHE_KEYS.ROLE],
        queryFn: userService.getAllRoles,
    });

    const { isLoading: fetchingDepartments, data: userDepartments } = useQuery({
        queryKey: [CACHE_KEYS.DEPARTMENT],
        queryFn: userService.getAllDepartments,
    });

    const { mutateAsync: createUser, isLoading: creatingUser } = useMutation({
        mutationFn: (data: ICreateUserRequest) => userService.createUser(data),

        onSuccess: (data) => {
            router.push(ROUTES.dashboard.TEAM);
        },

        onError: (error: any) => {
            makeToast({
                message: error?.response?.data?.message,
                type: "error",
                id: "create-user-error",
            });
        },
    });

    const GenderSelectData = [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
    ];

    const EducationLevelSelectData = Object.values(EducationLevel).map((level) => ({
        label: level,
        value: level,
    }));

    const RoleSelectData = useMemo(() => {
        return (
            userRoles?.data?.map((role) => ({
                label: role.name,
                value: role.id,
            })) ?? []
        );
    }, [userRoles]);

    const DepartmentSelectData = useMemo(() => {
        const dropdownData: IDropdownItem[] = [];

        userDepartments?.data?.map((department) => {
            const exists = dropdownData.find((item) => item.value === department.id);

            if (!exists) {
                dropdownData.push({
                    label: department.name,
                    value: department.id,
                });
            }
        });

        return dropdownData;
    }, [userDepartments]);

    //   Schema for the personal information component
    const createTeamMemberSchema = z.object({
        fullName: z.string(),
        emailAddress: z.string().email(),
        roleId: z.string().uuid(),
        gender: z.nativeEnum(UserGender),
        departmentId: z.string().uuid(),
        dateOfBirth: z.string().optional(),
        phoneNumber: z.string().optional(),
        emergencyContact: z.string().optional(),
        currentAddress: z.string().optional(),
        permanentAddress: z.string().optional(),
        linkedinProfile: z.string().optional(),
        educationLevel: z.nativeEnum(EducationLevel).optional(),
    });

    type CreateTeamMemberSchemaType = z.infer<typeof createTeamMemberSchema>;

    const createTeamMemberForm = useForm<CreateTeamMemberSchemaType>({
        resolver: zodResolver(createTeamMemberSchema),

        defaultValues: {
            gender: undefined,
            currentAddress: undefined,
            permanentAddress: undefined,
            linkedinProfile: undefined,
            educationLevel: undefined,
            dateOfBirth: undefined,
            departmentId: undefined,
            phoneNumber: undefined,
            emergencyContact: undefined,
            roleId: undefined,
            emailAddress: undefined,
            fullName: undefined,
        },
    });

    const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const cleaned_data = removeEmptyKeys(createTeamMemberForm.getValues());

        createUser(cleaned_data as any);
    };

    return {
        data: {
            GenderSelectData,
            EducationLevelSelectData,
            RoleSelectData,
            DepartmentSelectData,
        },
        form: createTeamMemberForm,
        submitting: creatingUser,
        pageLoading: fetchingRoles || fetchingDepartments,
        onSubmit,
    };
};
