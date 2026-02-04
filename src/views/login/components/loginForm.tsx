import { useEffect } from "react";
import { LockOutlined, UserOutlined, LoginOutlined, RedoOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, notification } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setTempMsg, setToken, setUserInfo } from "@/redux/modules/user";
import { getTimeState } from "@/utils";
import { loginApi } from "@/api/modules/login";
import { ReqLogin } from "@/api/interface";
import { encrypt } from "@/utils/gmCrypto";

type FieldType = ReqLogin;

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [form] = Form.useForm();

  // 监听storage事件，实现跨标签页状态同步
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "logout" && event.newValue === "true") {
        // 其他标签页登出，清除当前标签页的状态
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "/login";
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const onFinish = async (values: FieldType) => {
    try {
      // 调用登录API
      const res = await loginApi(values as ReqLogin);

      // 保存用户信息和token
      dispatch(
        setTempMsg({
          username: values.username,
          password: encrypt(values.password)
        })
      );

      // 保存用户信息和token到Redux
      dispatch(setToken(res.token || ""));
      dispatch(
        setUserInfo({
          id: "",
          name: values.username,
          email: ""
        })
      );

      // 显示登录成功消息
      notification.success({
        title: getTimeState() + "，" + (values.username || ""),
        description: "欢迎登录统一认证中心"
      });

      // 检查是否有重定向地址
      const redirect = searchParams.get("redirect");
      const from = redirect || "/";

      // 跳转到重定向地址或首页
      navigate(from);

      // 通知其他标签页登录成功
      localStorage.setItem("loginSuccess", "true");
    } catch (error) {
      message.error("登录失败，请重试！");
      console.error("Login error:", error);
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form<FieldType>
      form={form}
      name="login-form"
      layout="vertical"
      labelCol={{ span: 5 }}
      size="large"
      autoComplete="off"
      className="login-form-content"
      onFinish={onFinish}
    >
      <Form.Item<FieldType> name="username" rules={[{ required: true, message: "请输入用户名！" }]}>
        <Input prefix={<UserOutlined />} placeholder="用户名" />
      </Form.Item>

      <Form.Item<FieldType> name="password" rules={[{ required: true, message: "请输入密码！" }]}>
        <Input.Password prefix={<LockOutlined />} placeholder="密码" />
      </Form.Item>

      <Form.Item className="login-form-button">
        <Button shape="round" icon={<RedoOutlined />} onClick={onReset}>
          重置
        </Button>
        <Button type="primary" shape="round" icon={<LoginOutlined />} htmlType="submit">
          登录
        </Button>
      </Form.Item>
      <p className="login-form-link-item">
        <a href="/register" className="login-form-link">
          还没有账号？去注册
        </a>
      </p>
    </Form>
  );
};

export default LoginForm;
