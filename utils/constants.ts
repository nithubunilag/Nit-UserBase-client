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
        EMPLOYEES: "/employees",
    },
};

const CACHE_KEYS = {
    LOG_OUT: "LOG_OUT",
};

export { CACHE_KEYS, ICONS_DIR, IMAGE_DIR, ROUTES };
