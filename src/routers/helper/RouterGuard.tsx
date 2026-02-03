import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLoaderData, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import type { RootState } from "@/redux";
import type { MetaProps } from "@/routers/interface";
import { HOME_URL, LOGIN_URL, ROUTER_WHITE_LIST } from "@/config";

/**
 * @description Route guard component
 */
interface RouterGuardProps {
  children: React.ReactNode;
}

const RouterGuard: React.FC<RouterGuardProps> = props => {
  const loader = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { pathname } = location;

  const { token } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const meta = loader as MetaProps;
    if (meta) {
      const title = import.meta.env.VITE_GLOB_APP_TITLE || "统一认证中心";
      document.title = meta?.title ? `${meta.title} - ${title}` : title;
    }

    // Routing whitelist - 如果在白名单中，不进行权限检查
    if (ROUTER_WHITE_LIST.includes(pathname)) {
      return;
    }

    // Whether login page
    const isLoginPage = pathname === LOGIN_URL;

    // If there is token or login on the accessed page, redirect to the home page
    if (token && isLoginPage) {
      const redirect = searchParams.get("redirect") || HOME_URL;
      navigate(redirect);
      return;
    }

    // If there is no token && the accessed page is not login, redirect to the login page
    if (!token && !isLoginPage) {
      // 保存当前路径作为重定向地址
      navigate(LOGIN_URL, {
        replace: true,
        state: { from: pathname + location.search + location.hash }
      });
      return;
    }
  }, [loader, navigate, location, pathname, searchParams, token]);

  return props.children;
};

export default RouterGuard;
