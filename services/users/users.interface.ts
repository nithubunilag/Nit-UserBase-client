import { EducationLevel, User, UserGender } from "@/app/(dashboard)/model";

export interface ICreateUserRequest {
    fullName: string;
    emailAddress: string;
    roleId: string;
    gender: UserGender;

    departmentId?: string;
    dateOfBirth?: Date;
    phoneNumber?: string;
    emergencyContact?: string;
    currentAddress?: string;
    permanentAddress?: string;
    linkedinProfile?: string;
    educationLevel?: EducationLevel;
}

export interface EmploymentTimeline {
    id: string;
    userId: string;
    action: string;
    oldValue: string;
    newValue: string;
    user: User;
    createdAt: string;
}

export interface SingleUser {
    user: User;
    employmentTimeline: EmploymentTimeline[];
}

export interface FetchUsersQuerySchema {
    role: string;
    gender: UserGender;
    educationLevel: EducationLevel;
    department: string;
    sortBy: "fullName" | "createdAt";
    sortOrder: "asc" | "desc";
    page: number;
    limit: number;
}

export interface ICreateProjectRequest {
    name: string;
    description: string;
}
