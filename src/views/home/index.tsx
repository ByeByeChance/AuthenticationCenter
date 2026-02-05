import "./index.less";
import HomeCard from "./components/card";
import SplitText from "@/components/ReactBits/SplitText";
import { useSelector } from "react-redux";

const Home = () => {
  const username = useSelector((state: any) => state.user.userInfo.name);
  return (
    <div className="home-wrap">
      <div className="home-content-title">
        <SplitText
          text={`${username}，请选择一个系统进行登入！`}
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          tag="h1"
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
      <div className="home-content-card">
        <HomeCard />
      </div>
    </div>
  );
};

export default Home;
