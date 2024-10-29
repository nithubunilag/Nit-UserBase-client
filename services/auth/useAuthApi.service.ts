import { useApi, useAuthActions } from "hooks";
import { makeToast } from "libs/react-toast";
import { ILoginRequest } from "./auth.interface";
import { authService } from "./auth.service";

export const useAuthApi = () => {
    const { login, logout } = useAuthActions();

    //   LOGIN
    const loginRequest = useApi<any, ILoginRequest>((data: ILoginRequest) => {
        return authService.login(data);
    });

    const handleLogin = async (loginDetails: ILoginRequest) => {
        loginRequest.reset();

        const response = await loginRequest.request(loginDetails);

        if (!response) throw new Error("No Response");

        if (response.data.data && response.data.data.access_token) {
            login(response.data.data.access_token);
        }

        makeToast({
            message: "Login Successfully",
            type: "success",
            id: "login",
        });
    };

    //   LOGIN
    const logoutRequest = useApi<any, null>(authService.logout);
    const handleLogout = async () => {
        logoutRequest.reset();

        await logoutRequest.request();

        logout();

        makeToast({
            message: "Logout Successfully",
            type: "success",
            id: "logout",
        });
    };

    return {
        login: {
            loading: loginRequest.loading,
            data: loginRequest.data,
            handler: handleLogin,
            error: loginRequest.error,
        },

        logout: {
            loading: logoutRequest.loading,
            data: logoutRequest.data,
            handler: handleLogout,
        },
    };
};
