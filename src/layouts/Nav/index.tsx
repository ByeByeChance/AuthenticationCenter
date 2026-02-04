import CardNav, { CardNavItem } from "@/components/ReactBits/CardNav";
import logo from "@/assets/icon_IDidentity_black.svg";

const Nav = () => {
  const items: CardNavItem[] = [
    // {
    //   label: "平台",
    //   bgColor: "#0D0716",
    //   textColor: "#fff",
    //   links: [
    //     { label: "我的平台", ariaLabel: "我的平台", path: "/" },
    //     { label: "平台管理", ariaLabel: "平台管理", path: "/platformManagement" }
    //   ]
    // },
    // {
    //   label: "用户",
    //   bgColor: "#170D27",
    //   textColor: "#fff",
    //   links: [
    //     { label: "用户管理", ariaLabel: "用户管理", path: "/userManagement" },
    //     { label: "角色管理", ariaLabel: "角色管理", path: "/roleManagement" }
    //   ]
    // },
    // {
    //   label: "审计管理",
    //   bgColor: "#271E37",
    //   textColor: "#fff",
    //   links: [
    //     { label: "审计日志", ariaLabel: "审计日志", path: "/auditLog" },
    //     { label: "审计配置", ariaLabel: "审计配置", path: "/auditConfig" }
    //   ]
    // }
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
