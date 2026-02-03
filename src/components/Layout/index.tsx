import { Outlet, useLocation } from "react-router-dom";
import Particles from "@/components/ReactBits/Particles";
import HeaderLayout from "@/layouts/Header";
import "./index.less";

function LayoutComponent() {
  const location = useLocation();
  const currentPath = location.pathname;

  // 检查是否为登录页、注册页或404页
  const isSpecialPage = ["/login", "/register", "/404"].includes(currentPath);

  return (
    <div className="layout-wrapper">
      {/* 背景粒子效果 - 只在非特殊页面显示 */}
      {!isSpecialPage && <Particles />}

      {/* 应用布局容器 */}
      <div className="app-layout">
        {/* 头部 */}
        <HeaderLayout />

        {/* 主体内容 */}
        <div className="app-body">
          {/* 主内容区 */}
          <main className="app-content">
            <Outlet />
          </main>
        </div>

        {/* 底部 */}
        <div className="app-footer">Unified Authentication Center ©2026 Created by LD4d</div>
      </div>
    </div>
  );
}

export default LayoutComponent;
