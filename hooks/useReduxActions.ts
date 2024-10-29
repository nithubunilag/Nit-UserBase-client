import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { appSlice, applicantsSlice, authSlice } from "@/state_management";

export const useAppActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(Object.assign({}, appSlice.actions), dispatch);
};

export const useAuthActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(Object.assign({}, authSlice.actions), dispatch);
};


export const useApplicantActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(Object.assign({}, applicantsSlice.actions), dispatch);
};
