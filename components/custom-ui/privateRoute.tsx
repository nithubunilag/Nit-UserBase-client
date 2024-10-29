"use client";

import { ROUTES } from "@/utils/constants";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { redirect } from "next/navigation";
import { ReactElement, useEffect } from "react";

interface RequireAuthProps {
    children: ReactElement;
    require: "auth" | "no-auth";
    token: RequestCookie | undefined;
}

export const PrivateRoute = (props: RequireAuthProps) => {
    const { require, children, token } = props;

    useEffect(() => {
        if (require === "auth" && !token) {
            return redirect(ROUTES.auth.LOGIN);
        }

        if (require === "no-auth" && token) {
            return redirect(ROUTES.home.HOME);
        }
    }, [token, require]);

    return children;
};
