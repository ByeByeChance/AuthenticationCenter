import { Navigate } from "react-router-dom";
import { HOME_URL, LOGIN_URL, REGISTER_URL, NOT_FOUND_URL } from "@/config";
import type { RouteObjectType } from "@/routers/interface";
import Login from "@/views/login";
import Register from "@/views/register";
import NotFound from "@/views/404";
import Home from "@/views/home";

/**
 * staticRouter
 */
export const staticRouter: RouteObjectType[] = [
  {
    path: "/",
    element: <Navigate to={HOME_URL} />,
    meta: {
      title: "首页"
    }
  },
  {
    path: LOGIN_URL,
    element: <Login />,
    meta: {
      title: "登录"
    }
  },
  {
    path: REGISTER_URL,
    element: <Register />,
    meta: {
      title: "注册"
    }
  },
  {
    path: NOT_FOUND_URL,
    element: <NotFound />,
    meta: {
      title: "404页面"
    }
  },
  {
    path: HOME_URL,
    element: <Home />,
    meta: {
      title: "首页",
      requiresAuth: true
    }
  },
  // 404 page
  {
    path: "*",
    element: <NotFound />,
    meta: {
      title: "404页面"
    }
  }
];
