import type { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux";

interface AuthRouteProps {
  children?: ReactNode;
}

function AuthRoute({ children }: AuthRouteProps) {
  const { token } = useSelector((state: RootState) => state.user);
  const location = useLocation();

  if (!token) {
    // 未登录，重定向到登录页面，并记录当前路径以便登录后返回
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children || <Outlet />;
}

export default AuthRoute;
