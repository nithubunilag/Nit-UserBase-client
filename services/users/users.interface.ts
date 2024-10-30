import { EducationLevel, UserGender } from "@/app/(dashboard)/team/model";

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
