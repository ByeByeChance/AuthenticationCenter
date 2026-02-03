import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

function UserManagement() {
  return (
    <div className="user-management-container">
      <Card title="用户管理">
        <Title level={4}>用户管理页面</Title>
        <Paragraph>这里是用户管理功能的实现区域，您可以在这里查看、添加、编辑和删除用户。</Paragraph>
      </Card>
    </div>
  );
}

export default UserManagement;
