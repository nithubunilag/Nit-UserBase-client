import axios from "axios";
import { ACCESS_TOKEN_KEY } from "../utils";

export const axiosInstance = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_API_URL,
    baseURL:"https://nit-identity-api.onrender.com/api/v1",
    withCredentials: true,
});

// INTERCEPTORS
axiosInstance.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

        if (!accessToken) return config;

        if (config.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    async (response) => {
        // interceptor logic goes here. e.g additional headers, request encryption, session management, etc.

        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);
