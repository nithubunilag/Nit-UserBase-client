import { axiosInstance } from "@/libs/axios";
import { ILoginRequest, IResetPassword, ISignupRequest } from "./auth.interface";

class AuthService {
    private authUrl!: string;

    constructor() {}

    public async login(data: ILoginRequest) {
        return await axiosInstance.post(`/auth/login`, data);
    }

    public async logout() {
        return await axiosInstance.get(`/auth/logout`);
    }

    public async signup(data: ISignupRequest) {
        return await axiosInstance.post(`${this.authUrl}/register`, data);
    }

    public async forgot_password_request(emailAddress: string) {
        return await axiosInstance.post(`/auth/forgot-password`, {
            emailAddress,
        });
    }

    public async reset_password(data: IResetPassword) {
        return await axiosInstance.post(`${this.authUrl}/reset-password`, data);
    }
}

export const authService = new AuthService();
