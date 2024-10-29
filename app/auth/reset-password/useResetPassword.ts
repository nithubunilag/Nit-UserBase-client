import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResetPasswordMutation } from "libs/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useResetPassword = () => {
  const params = useSearchParams();
  const router = useRouter();

  const id = params.get("id");
  const token = params.get("token");

  const getUserIdAndTokenFromUrl = () => {
    if (!id || !token) return router.push("/auth/login");
  };

  useEffect(() => {
    getUserIdAndTokenFromUrl();
  }, []);

  const {
    mutateAsync: resetPassword,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useResetPasswordMutation();

  const Schema = z
    .object({
      user_id: z.string(),
      token: z.string(),
      password: z
        .string()
        .min(3, { message: "Password length should be at least 3 characters" })
        .max(20, { message: "Password cannot exceed more than 20 characters" }),
      confirm_password: z
        .string()
        .min(3, {
          message: "Confirm Password length should be at least 3 characters",
        })
        .max(20, {
          message: "Confirm Password cannot exceed more than 20 characters",
        }),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "confirm Password and password don't match",
      path: ["confirm_password"],
    });

  type SchemaType = z.infer<typeof Schema>;

  const resetPasswordForm = useForm<SchemaType>({
    resolver: zodResolver(Schema),
    defaultValues: {
      user_id: "",
      token: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    try {
      const response = await resetPassword({
        password: data.password,
        token: token!,
        user_id: id! as string,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const page_error = () => {
    const form_error =
      Object.keys(resetPasswordForm.formState.errors).length > 0
        ? "All required field must be complete"
        : null;

    const base_api_error = error as any;

    const api_error = isError ? base_api_error.response?.data.message : null;

    return form_error || api_error;
  };

  return {
    form: resetPasswordForm,
    onSubmit,
    loading: isLoading,
    error: page_error,
    isSuccess,
  };
};
