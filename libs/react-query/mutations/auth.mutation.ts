import { useMutation } from "react-query";
import { ILoginRequest, IResetPassword, ISignupRequest, authService } from "services/auth";

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: (data: ILoginRequest) => authService.login(data),
    });
};

export const useSignUpMutation = () => {
    return useMutation({
        mutationFn: (data: ISignupRequest) => authService.signup(data),
    });
};

export const useForgotPasswordMutation = () => {
    return useMutation({
        mutationFn: (data: { email: string }) => authService.forgot_password_request(data.email),
    });
};

export const useResetPasswordMutation = () => {
    return useMutation({
        mutationFn: (data: IResetPassword) => authService.reset_password(data),
    });
};
