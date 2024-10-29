/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

type IRole = "staff" | "student";

interface IUser {
    role: IRole;
}

interface IInitialState {
    data: IUser | null;
    isAuthenticated: boolean;
}

const initialState: IInitialState = {
    data: {
        role: "staff",
    },
    isAuthenticated: true,
};

const authReduxSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            // Removes Refresh Token in Local Storage
            // localStorage.removeItem("refreshToken");
            state.isAuthenticated = false;

            // Resets Access Token
        },

        login: (state) => {
            state.isAuthenticated = true;
        },
    },
});

export const authSlice = {
    reducer: authReduxSlice.reducer,
    actions: authReduxSlice.actions,
};
