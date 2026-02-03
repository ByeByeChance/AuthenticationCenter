import type { SizeType } from "antd/lib/config-provider/SizeContext";
import { RouteObjectType } from "@/routers/interface";

export type LanguageType = "zh" | "en" | null;

export type { SizeType, RouteObjectType };

export interface SystemInfo {
  id: string;
  image: string;
  title: string;
  url: string;
}

/* UserState */
export interface UserInfo {
  id: string;
  name: string;
  email: string;
}

export interface UserState {
  token: string;
  tempMsg: {
    username?: string;
    password?: string;
  };
  userInfo: UserInfo;
  systemInfo: SystemInfo[] | null;
}
