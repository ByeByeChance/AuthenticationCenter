import "./index.less";
import Particles from "@/components/ReactBits/Particles";
import HomeCard from "./components/card";
import SplitText from "@/components/ReactBits/SplitText";
import HeaderLayout from "@/layouts/Header";

const Home = () => {
  return (
    <div className="home-wrap">
      <Particles />
      <div className="home-container">
        <HeaderLayout />
        <div className="home-content">
          <div className="home-content-title">
            <SplitText
              text="请选择一个系统进行登入！"
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
      </div>
    </div>
  );
};

export default Home;
