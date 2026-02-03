import { Layout } from "antd";
import Nav from "@/components/Nav";

const { Header } = Layout;

const HeaderLayout = () => {
  return (
    <Header>
      <div className="nav-content">
        <Nav />
      </div>
    </Header>
  );
};

export default HeaderLayout;
