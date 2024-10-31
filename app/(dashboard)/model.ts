export enum UserGender {
    Male = "male",
    Female = "female",
}

export enum EducationLevel {
    HighSchool = "High School",
    BSc = "B.Sc.",
    Masters = "Masters",
    PhD = "Ph.D.",
    Diploma = "Diploma",
    AssociateDegree = "Associate Degree",
    Others = "Others",
}

export interface Department {
    id: string;
    name: string;
    createdAt: string;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    status: "active" | "completed" | "pending";
    createdAt: string;
    users: User[];
    userProject?: UserProject;
}

interface UserProject {
    id: string;
    userId: string;
    projectId: string;
    roleInProject: "Contributor" | "Admin" | "Viewer";
    createdAt: string;
    updatedAt: string;
}

export interface Role {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export interface User {
    id: string;
    fullName: string;
    dateOfBirth: string;
    gender: UserGender;
    phoneNumber: string;
    emailAddress: string;
    emergencyContact?: string;
    currentAddress?: string;
    permanentAddress?: string;
    linkedinProfile?: string;
    educationLevel?: EducationLevel;
    roleId: string;
    departmentId?: string;
    createdAt: string;
    updatedAt: string;
    department?: Department;
    role?: Role;
    projects?: Project[];
}
