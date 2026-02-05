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

/**
 * @description Sub system title and url configuration
 */
export const DATA_MANAGEMENT_TITLE = import.meta.env.VITE_DATA_MANAGEMENT_TITLE || "数据管理平台";
export const DATA_MANAGEMENT_URL = import.meta.env.VITE_DATA_MANAGEMENT_URL || "http://10.168.1.95:81/#/portalSoftLanding";

export const ALGORITHM_MANAGEMENT_TITLE = import.meta.env.VITE_ALGORITHM_MANAGEMENT_TITLE || "算法管理平台";
export const ALGORITHM_MANAGEMENT_URL =
  import.meta.env.VITE_ALGORITHM_MANAGEMENT_URL || "http://10.168.1.95:30800/#/portalSoftLanding";

export const AIGC_ALGORITHM_VERIFICATION_TITLE = import.meta.env.VITE_AIGC_ALGORITHM_VERIFICATION_TITLE || "AIGC算法验证平台";
export const AIGC_ALGORITHM_VERIFICATION_URL =
  import.meta.env.VITE_AIGC_ALGORITHM_VERIFICATION_URL || "http://10.168.1.95:8848/#/portalSoftLanding";
