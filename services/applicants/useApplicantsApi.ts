import { useApi, useApplicantActions } from "hooks";
import { makeToast } from "libs/react-toast";

import { ApplicantsService } from "./applicants.service";
import { IApplicant } from "./applicants.interface";
import { IBaseApiResponse } from "services/types";

export const useApplicantsApi = () => {
  const { initializeApplicants } = useApplicantActions();
  const applicantService = new ApplicantsService(
    process.env.APP_API_URL ?? "localhost:3000"
  );

  //   Get Applicants
  const getAllApplicantsRequest = useApi<IBaseApiResponse<IApplicant[]>, null>(
    applicantService.getAllApplicants
  );

  const handleGetAllApplicants = async () => {
    getAllApplicantsRequest.reset();

    const response = await getAllApplicantsRequest.request();

    if (!response) throw new Error("No Response");

    initializeApplicants(response.data);

    makeToast({
      message: "Applicants Retrieved Successfully",
      type: "success",
      id: "login",
    });
  };

  return {
    getApplicants: {
      loading: getAllApplicantsRequest.loading,
      data: getAllApplicantsRequest.data,
      handler: handleGetAllApplicants,
    },
  };
};
