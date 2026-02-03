import { ReqPage, ResPage, UserList } from "@/api/interface/index";
import http from "@/api";

/**
 * @name UserModule
 */
// Get user list
export const getUserList = (params: ReqPage) => {
  return http.post<ResPage<UserList>>(`/user/list`, params);
};
