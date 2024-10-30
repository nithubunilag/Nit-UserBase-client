import { AxiosError } from "axios";


export interface IBaseApiResponse<T> {
    message: string;
    data: T;
    status: number;
}

export interface IApiError extends AxiosError<{ message: string }> {}
