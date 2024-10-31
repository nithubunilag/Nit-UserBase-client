import { Department, Project, Role, User } from "@/app/(dashboard)/model";
import { axiosInstance } from "@/libs/axios";
import { IBaseApiResponse } from "../types";
import { FetchProjectsQuerySchema, FetchUsersQuerySchema, ICreateProjectRequest, ICreateUserRequest, SingleUser } from "./users.interface";

class UserService {
    constructor() {}

    public getAllUsers = async (query?: Partial<FetchUsersQuerySchema>): Promise<IBaseApiResponse<User[]>> => {
        try {
            const { data } = await axiosInstance.get("/user", { params: query });

            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    public getSingleUser = async (id: string): Promise<IBaseApiResponse<SingleUser>> => {
        try {
            const { data } = await axiosInstance.get(`/user/${id}`);

            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    public createUser = async (payload: ICreateUserRequest): Promise<IBaseApiResponse<User[]>> => {
        try {
            const { data } = await axiosInstance.post("/user", payload);

            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    public getAllRoles = async (): Promise<IBaseApiResponse<Role[]>> => {
        try {
            const { data } = await axiosInstance.get("/user/roles");

            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    public getAllDepartments = async (): Promise<IBaseApiResponse<Department[]>> => {
        try {
            const { data } = await axiosInstance.get("/user/departments");

            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    public createDepartment = async (payload: string): Promise<IBaseApiResponse<Department>> => {
        try {
            const { data } = await axiosInstance.post("/user/departments", { name: payload });

            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    public getAllProjects = async (query?: Partial<FetchProjectsQuerySchema>): Promise<IBaseApiResponse<Project[]>> => {
        try {
            const { data } = await axiosInstance.get("/user/projects", { params: query });

            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    public createProject = async (payload: ICreateProjectRequest): Promise<IBaseApiResponse<Project>> => {
        try {
            const { data } = await axiosInstance.post("/user/projects", payload);

            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    public getSingleProject = async (id: string): Promise<IBaseApiResponse<Project>> => {
        try {
            const { data } = await axiosInstance.get(`/user/projects/${id}`);

            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    public assignProjectsToUser = async (userId: string, projectIds: string[]): Promise<IBaseApiResponse<Project>> => {
        try {
            const { data } = await axiosInstance.post(`/user/${userId}/assign-projects`, { projectIds });

            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    };
}

export const userService = new UserService();
