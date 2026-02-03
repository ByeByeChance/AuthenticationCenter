import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

function Setting() {
  return (
    <div className="setting-container">
      <Card title="设置">
        <Title level={4}>设置页面</Title>
        <Paragraph>这里是系统设置功能的实现区域，您可以在这里配置系统参数和个人偏好。</Paragraph>
      </Card>
    </div>
  );
}

export default Setting;
