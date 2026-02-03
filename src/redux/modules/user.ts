import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, UserInfo, SystemInfo } from "@/redux/interface";

const userState: UserState = {
  token: "",
  tempMsg: {
    username: "",
    password: ""
  },
  userInfo: {
    id: "",
    name: "Admin",
    email: ""
  },
  systemInfo: null
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    setTempMsg(state, { payload }: PayloadAction<{ username: string; password: string }>) {
      state.tempMsg = payload;
    },
    setToken(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    setUserInfo(state, { payload }: PayloadAction<UserInfo>) {
      state.userInfo = payload;
    },
    setSystemInfo(state, { payload }: PayloadAction<SystemInfo[]>) {
      state.systemInfo = payload;
    },
    logout(state) {
      state.token = "";
      state.tempMsg.username = "";
      state.tempMsg.password = "";
      state.userInfo = {
        id: "",
        name: "Admin",
        email: ""
      };
      state.systemInfo = null;
      // 清空本地存储的所有数据
      localStorage.clear();
      // 清空sessionStorage的所有数据
      sessionStorage.clear();
      // 清空cookie
      document.cookie.split(";").forEach(cookie => {
        document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT");
      });
      // 通知其他标签页登出
      localStorage.setItem("logout", "true");
      // 跳转登录页
      window.location.href = "/login";
    }
  }
});

export const { setTempMsg, setToken, setUserInfo, setSystemInfo, logout } = userSlice.actions;
export default userSlice.reducer;
