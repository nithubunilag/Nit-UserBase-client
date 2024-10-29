import { axiosInstance } from "@/libs";

export class ApplicantsService {
  private apiUrl!: string;

  constructor(baseURL: string) {
    this.apiUrl = baseURL;
  }

  public async getAllApplicants() {
    return await axiosInstance.get(`${this.apiUrl}/get-applicants`);
  }
}
