import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForgotPasswordMutation } from "@/libs/react-query";

export const useForgotPassword = () => {
  const {
    mutateAsync: forgotPassword,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useForgotPasswordMutation();

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
    const form_error =
      Object.keys(forgotPasswordForm.formState.errors).length > 0
        ? "All required field must be complete"
        : null;

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
