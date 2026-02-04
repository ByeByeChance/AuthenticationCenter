import { Navigate } from "react-router-dom";
import { HOME_URL, LOGIN_URL, REGISTER_URL, NOT_FOUND_URL } from "@/config";
import type { RouteObjectType } from "@/routers/interface";
import Login from "@/views/login";
import Register from "@/views/register";
import NotFound from "@/views/404";
import Home from "@/views/home";
import UserManagement from "@/views/userManagement";
import Setting from "@/views/setting";
import LayoutComponent from "@/components/Layout";

/**
 * staticRouter
 */
export const staticRouter: RouteObjectType[] = [
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
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        path: "",
        element: <Navigate to={HOME_URL} />,
        meta: {
          title: "首页"
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
      {
        path: "/userManagement",
        element: <UserManagement />,
        meta: {
          title: "用户管理",
          requiresAuth: true
        }
      },
      {
        path: "/setting",
        element: <Setting />,
        meta: {
          title: "设置",
          requiresAuth: true
        }
      },
      {
        path: "/platformManagement",
        element: (
          <div className="page-container">
            <h2>平台管理</h2>
            <p>平台管理页面内容</p>
          </div>
        ),
        meta: {
          title: "平台管理",
          requiresAuth: true
        }
      },
      {
        path: "/roleManagement",
        element: (
          <div className="page-container">
            <h2>角色管理</h2>
            <p>角色管理页面内容</p>
          </div>
        ),
        meta: {
          title: "角色管理",
          requiresAuth: true
        }
      },
      {
        path: "/auditLog",
        element: (
          <div className="page-container">
            <h2>审计日志</h2>
            <p>审计日志页面内容</p>
          </div>
        ),
        meta: {
          title: "审计日志",
          requiresAuth: true
        }
      },
      {
        path: "/auditConfig",
        element: (
          <div className="page-container">
            <h2>审计配置</h2>
            <p>审计配置页面内容</p>
          </div>
        ),
        meta: {
          title: "审计配置",
          requiresAuth: true
        }
      }
    ]
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
