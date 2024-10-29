import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ROUTES } from "./utils";

const AUTH_ROUTES = Object.values(ROUTES.auth);

const MAIN_ROUTES = ["", ...Object.values(ROUTES.dashboard)];

export function middleware(request: NextRequest) {
    const token = request.cookies.get("accessToken")?.value;

    // Get Path Name and Remove trailing slashes
    const pathname = request.nextUrl.pathname?.replace(/\/+$/, "");

    // Check if the user is trying to access an auth route
    if (AUTH_ROUTES.includes(pathname)) {
        if (token) {
            return NextResponse.redirect(new URL(ROUTES.dashboard.HOME, request.url));
        }
    }

    // Check if the user is trying to access main application routes
    if (MAIN_ROUTES.includes(pathname)) {
        if (!token) {
            return NextResponse.redirect(new URL(ROUTES.auth.LOGIN, request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["", ...AUTH_ROUTES, ...MAIN_ROUTES],
};
