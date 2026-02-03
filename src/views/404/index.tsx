import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.less";
import FuzzyText from "@/components/ReactBits/FuzzyText";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>
          <FuzzyText baseIntensity={0.2} hoverIntensity={0.2} enableHover>
            404
          </FuzzyText>
        </h1>
        <p>
          <FuzzyText baseIntensity={0.2} hoverIntensity={0.2} fontSize="2rem" enableHover>
            抱歉，您访问的页面不存在。
          </FuzzyText>
        </p>
        <Button type="primary" size="large" onClick={() => navigate("/login")}>
          重新登录
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
