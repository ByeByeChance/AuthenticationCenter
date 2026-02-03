/**
 * @description Router configuration
 */
export const HOME_URL = "/home";
export const LOGIN_URL = "/login";
export const REGISTER_URL = "/register";
export const NOT_FOUND_URL = "/404";

/**
 * @description Router white list
 */
export const ROUTER_WHITE_LIST = [LOGIN_URL, REGISTER_URL, NOT_FOUND_URL];

/**
 * @description App title
 */
export const APP_TITLE = import.meta.env.VITE_GLOB_APP_TITLE || "统一认证中心";
