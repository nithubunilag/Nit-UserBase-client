import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { appSlice, authSlice } from "@/state_management";

export const useAppActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(Object.assign({}, appSlice.actions), dispatch);
};

export const useAuthActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(Object.assign({}, authSlice.actions), dispatch);
};
