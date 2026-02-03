import { JSX, useEffect } from "react";
import { Spin } from "antd";
import NProgress from "@/config/nprogress";
import "./index.less";

export const Loading = (): JSX.Element => {
  return (
    <div className="loading-box">
      <Spin size="large" />
    </div>
  );
};

export const PageLoader = (): JSX.Element => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return <Loading />;
};
