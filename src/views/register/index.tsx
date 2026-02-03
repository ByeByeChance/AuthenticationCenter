import Aurora from "@/components/ReactBits/Aurora";
import SplitText from "@/components/ReactBits/SplitText";
import "./index.less";
import RegisterForm from "./components/registerForm";
import IDIdentityWhite from "@/assets/icon_IDidentity_white.svg";

function Register() {
  return (
    <div className="login-container">
      <Aurora />
      <div className="login-form-container">
        <div className="login-form-title-container">
          <img className="login-form-title-icon" src={IDIdentityWhite} alt="ID Identity White" />
          <SplitText
            text="注册账号"
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
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
