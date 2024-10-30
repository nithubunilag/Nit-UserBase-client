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

export interface SingleUser {
    user: User;
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
