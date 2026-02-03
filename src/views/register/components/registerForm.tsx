import { LockOutlined, UserOutlined, MailOutlined, CheckCircleOutlined, RedoOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, notification } from "antd";
import { useNavigate } from "react-router-dom";

interface FieldType {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values: FieldType) => {
    try {
      // 验证密码是否一致
      if (values.password !== values.confirmPassword) {
        message.error("两次输入的密码不一致！");
        return;
      }

      // 这里可以调用注册API
      // const res = await registerApi(values);

      // 显示注册成功消息
      notification.success({
        title: "注册成功",
        description: "请使用您的账号密码登录"
      });

      // 跳转到登录页面
      navigate("/login");
    } catch (error) {
      message.error("注册失败，请重试！");
      console.error("Register error:", error);
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form<FieldType>
      form={form}
      name="register-form"
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

      <Form.Item<FieldType>
        name="email"
        rules={[
          { required: true, message: "请输入邮箱！" },
          { type: "email", message: "请输入正确的邮箱格式！" }
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="邮箱" />
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        rules={[
          { required: true, message: "请输入密码！" },
          { min: 6, message: "密码长度至少为6位！" }
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="密码" />
      </Form.Item>

      <Form.Item<FieldType>
        name="confirmPassword"
        rules={[
          { required: true, message: "请确认密码！" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("两次输入的密码不一致！"));
            }
          })
        ]}
      >
        <Input.Password prefix={<CheckCircleOutlined />} placeholder="确认密码" />
      </Form.Item>

      <Form.Item className="login-form-button">
        <Button shape="round" icon={<RedoOutlined />} onClick={onReset}>
          重置
        </Button>
        <Button type="primary" shape="round" icon={<CheckCircleOutlined />} htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
