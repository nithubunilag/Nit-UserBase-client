const ICONS_DIR = "/icons";

const IMAGE_DIR = "/images";

const ROUTES = {
    auth: {
        LOGIN: "/auth/login",
        SIGNUP: "/auth/signup",
        FORGOT_PASSWORD: "/auth/forgot-password",
        RESET_PASSWORD: "/auth/reset-password",
    },
    dashboard: {
        HOME: "/",
        TEAM: "/team",
        EMPLOYEES: "/team/employees",
        DEPARTMENT: "/departments",
    },
};

const ACCESS_TOKEN_KEY = "accessToken";

const CACHE_KEYS = {
    LOG_OUT: "LOG_OUT",
    ALL_TEAM: "ALL_TEAM",
    DEPARTMENT: "DEPARTMENT",
    ROLE: "ROLE",
};

export { ACCESS_TOKEN_KEY, CACHE_KEYS, ICONS_DIR, IMAGE_DIR, ROUTES };
