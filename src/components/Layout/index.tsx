import { Outlet, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./index.less";

const { Header, Content, Footer } = Layout;

function LayoutComponent() {
  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={[
            { key: "1", label: <Link to="/">首页</Link> },
            { key: "2", label: <Link to="/login">登录</Link> },
            { key: "3", label: <Link to="/register">注册</Link> }
          ]}
        />
      </Header>
      <Content className="app-content">
        <Outlet />
      </Content>
      <Footer className="app-footer">Unified Authentication Center ©2026 Created by React + TypeScript</Footer>
    </Layout>
  );
}

export default LayoutComponent;
