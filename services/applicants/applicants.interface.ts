export interface IApplicant {
  id: number;
  name: string;
  avatar: string;
  email: string;
  date: string;
  department: string;
  status: "pending" | "complete";
}


