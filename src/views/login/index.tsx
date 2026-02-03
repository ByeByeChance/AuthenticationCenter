import Aurora from "@/components/ReactBits/Aurora";
import SplitText from "@/components/ReactBits/SplitText";
import { APP_TITLE } from "@/config";
import "./index.less";
import LoginForm from "./components/loginForm";
import IDIdentityWhite from "@/assets/icon_IDidentity_white.svg";

function Login() {
  localStorage.clear();
  sessionStorage.clear();

  return (
    <div className="login-container">
      <Aurora />
      <div className="login-form-container">
        <div className="login-form-title-container">
          <img className="login-form-title-icon" src={IDIdentityWhite} alt="ID Identity White" />
          <SplitText
            text={APP_TITLE}
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
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
