import CardNav from "@/components/ReactBits/CardNav";
import logo from "@/assets/icon_IDidentity_black.svg";

const Nav = () => {
  const items = [
    {
      label: "平台",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "我的平台", ariaLabel: "我的平台" },
        { label: "平台管理", ariaLabel: "平台管理" }
      ]
    },
    {
      label: "用户",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "用户管理", ariaLabel: "用户管理" },
        { label: "角色管理", ariaLabel: "角色管理" }
      ]
    },
    {
      label: "审计管理",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "审计日志", ariaLabel: "审计日志" },
        { label: "审计配置", ariaLabel: "审计配置" }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Nav;
