import http from "@/api";
// import { AuthState } from "@/redux/interface";
import { ReqLogin, ResLogin } from "@/api/interface/index";

/**
 * @name AuthModule
 */
// User login
export const loginApi = (params: ReqLogin) => {
  return http.post<ResLogin>(`/api/login`, params);
  // return http.post<ResLogin>(`/login`, params, { loading: false });
  // return http.post<ResLogin>(`/login`, {}, { params });
  // return http.post<ResLogin>(`/login`, qs.stringify(params));
  // return http.get<ResLogin>(`/login?${qs.stringify(params, { arrayFormat: "repeat" })}`);
};

// User logout
export const logoutApi = () => {
  return http.post(`/api/logout`, {}, { loading: true });
};
