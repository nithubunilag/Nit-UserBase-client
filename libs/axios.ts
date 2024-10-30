import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
   

});

// INTERCEPTORS
axiosInstance.interceptors.request.use(
    async (config) => {
        // interceptor logic goes here. e.g additional headers, request encryption, session management, etc.

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
