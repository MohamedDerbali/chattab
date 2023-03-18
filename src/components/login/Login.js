import { ReactComponent as UserIcon } from "../../icons/user.svg";
import { useState } from "react";
import { ReactComponent as PasswordIcon } from "../../icons/password.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { user } from "../../services/api";
import { getAccessToken } from "../../services/jwtService";
function Login({ isLogged, setIsLogged }) {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const handleLogin = async () => {
    try {
      if(getAccessToken()){
        return;
      }
      await user.login(loginForm);
      toast.success("Logged In", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        setIsLogged(true);
      }, 2000);
    } catch (error) {
      toast.error(error?.response?.data?.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };
  return (
    <div className="main">
      <ToastContainer />
      <div className="login-section" id="login-section">
        <div className="login-title">
          <h1 className="welcome-message-login">Welcome Back!</h1>
          <p className="welcome-slogan">happy to have you here!</p>
        </div>
        <p className="indicator-text">
          EMAIL OR USERNAME <span className="required-field">*</span>
        </p>
        <label className="input-content">
          <span className="icon-login">
            <UserIcon />
          </span>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            className="inputs-login"
            placeholder="write your email here..."
          />
        </label>
        <br />
        <p className="indicator-text">
          PASSWORD <span className="required-field">*</span>
        </p>
        <label className="input-content">
          <span className="icon-login">
            <PasswordIcon />
          </span>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="inputs-login"
            placeholder="write your password here..."
          />
        </label>
        <p className="indicator-forget-password">Forgot your password?</p>
        <label className="input-content">
          <input
            className="btn-login"
            type="submit"
            value="Log in"
            onClick={handleLogin}
          />
        </label>
        <p className="indicator-text">
          Need an account?{" "}
          <span className="indicator-forget-password">Register</span>
        </p>
      </div>
    </div>
  );
}
export default Login;
