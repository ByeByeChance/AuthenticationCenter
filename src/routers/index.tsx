import { createBrowserRouter, Outlet } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { staticRouter } from "./modules/staticRouter";
import RouterGuard from "@/routers/helper/RouterGuard";

/**
 * @description Route file entry
 */
const createRouter = () => {
  // 创建全局路由守卫
  const guardedRoutes: RouteObject[] = [
    {
      path: "/",
      element: (
        <RouterGuard>
          <Outlet />
        </RouterGuard>
      ),
      children: [...staticRouter] as RouteObject[]
    }
  ];

  return createBrowserRouter(guardedRoutes);
};

export const router = createRouter();

export default router;
