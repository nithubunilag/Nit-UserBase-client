/* eslint-disable no-param-reassign */
import { IMAGE_DIR } from "@/utils/constants";
import { createSlice } from "@reduxjs/toolkit";
import { IApplicant } from "services/applicants";

interface IInitialState {
  applicants: IApplicant[];
}

const initialState: IInitialState = {
  applicants: [
    {
      id: 1,
      name: "Yinka",
      avatar: `${IMAGE_DIR}/dummyAvatar.png`,
      email: "daidokunoye003@gmail.com",
      date: "April 2, 2022",
      department: "Nursing",
      status: "pending",
    },
    {
      id: 2,
      name: "David Okunoye",
      avatar: `${IMAGE_DIR}/femaleAvatar.svg`,
      email: "david123@gmail.com",
      date: "April 2, 2022",
      department: "Nursing",
      status: "complete",
    },
    {
      id: 2,
      name: "David Okunoye",
      avatar: `${IMAGE_DIR}/taiwo2.png`,
      email: "david123@gmail.com",
      date: "April 2, 2022",
      department: "Nursing",
      status: "complete",
    },
    {
      id: 2,
      name: "David Okunoye",
      avatar: `${IMAGE_DIR}/dummyAvatar.png`,
      email: "david123@gmail.com",
      date: "April 2, 2022",
      department: "Nursing",
      status: "complete",
    },
  ],
};

const applicantsReduxSlide = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    initializeApplicants: (
      state,
      action: {
        payload: IApplicant[];
      }
    ) => {
      const { payload } = action;

      state.applicants = payload;
    },
  },
});

export const applicantsSlice = {
  reducer: applicantsReduxSlide.reducer,
  actions: applicantsReduxSlide.actions,
};
