import { makeToast } from "@/libs/react-toast";
import { authService, ILoginRequest } from "@/services/auth";
import { IApiError } from "@/services/types";
import { ACCESS_TOKEN_KEY } from "@/utils/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useMutation } from "react-query";
import { z } from "zod";

export const useLogin = () => {
    const router = useRouter();

    const [secure, setSecure] = useState(true);

    const {
        mutateAsync: loginAccount,
        error,
        isError,
        isLoading,
    } = useMutation({
        mutationFn: (data: ILoginRequest) => authService.login(data),

        onSuccess: (payload: any) => {
            localStorage.setItem(ACCESS_TOKEN_KEY, payload.data.data.accessToken);

            router.push("/");
        },
    });

    const LoginSchema = z.object({
        emailAddress: z.string().email({ message: "Please Input a Valid Email" }),
        password: z
            .string()
            .min(3, { message: "Password Cannot be less than 3 Characters" })
            .max(20, { message: "Password must be lesser than 20 characters" }),
    });

    type LoginSchemaType = z.infer<typeof LoginSchema>;

    const loginForm = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),

        defaultValues: {
            emailAddress: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
        await loginAccount(data);
    };

    const loggingInError = useCallback(() => {
        const form_error = Object.keys(loginForm.formState.errors).length > 0 ? "All required field must be complete" : null;

        const base_api_error = error as IApiError;

        const api_error = isError ? base_api_error.response?.data.message : null;

        const error_message = form_error || api_error;

        if (error_message) {
            makeToast({
                message: error_message,
                type: "error",
                id: "error_message",
            });
        }
    }, [error, isError, loginForm.formState.errors]);

    const passwordIcon = useMemo(() => {
        return (
            <div className="my-auto pe-4" onClick={() => setSecure(!secure)}>
                {secure ? <FiEye className="cursor-pointer text-secondary" /> : <FiEyeOff className="cursor-pointer text-secondary" />}
            </div>
        );
    }, [secure, setSecure]);

    useEffect(() => {
        loggingInError();
    }, [loggingInError]);

    return {
        loginForm,
        onSubmit,
        logging_in: isLoading,
        passwordIcon,
        passwordVisible: secure,
    };
};
