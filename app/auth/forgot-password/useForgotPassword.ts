import { authService } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { z } from "zod";

export const useForgotPassword = () => {
    const {
        mutateAsync: forgotPassword,
        error,
        isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: (data: { email: string }) => authService.forgot_password_request(data.email),
    });

    const Schema = z.object({
        email: z.string().email({ message: "Please Input a Valid Email" }),
    });

    type SchemaType = z.infer<typeof Schema>;

    const forgotPasswordForm = useForm<SchemaType>({
        resolver: zodResolver(Schema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit: SubmitHandler<SchemaType> = async (data) => {
        await forgotPassword(data);
    };

    const page_error = () => {
        const form_error = Object.keys(forgotPasswordForm.formState.errors).length > 0 ? "All required field must be complete" : null;

        const base_api_error = error ?? null;

        return form_error || base_api_error;
    };

    return {
        form: forgotPasswordForm,
        onSubmit,
        loading: isLoading,
        error: page_error,
        isSuccess,
    };
};
