import * as React from "react";
import Logo from "../Images/Logo.jpg";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import apiCall from "../models/service";
import { setCookie } from "typescript-cookie";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const [credentials, setCredentials] = React.useState<any>({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = React.useState<string>("");
  const [hide, setHide] = React.useState<boolean>(false);
  const [passwordError, setPasswordError] = React.useState<string>("");
  const [inputFocus, setInputFocus] = React.useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCredentials((prev: String) => ({
      ...prev,
      [name]: value,
    }));
    setEmailError("");
  };
  const handleClick = (): void => {
    setHide(!hide);
  };

  const handleSubmit = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(credentials.email)) {
      setEmailError("Please enter valid email");
      const val = true;
      setInputFocus(val);
    }
    if (!passwordRegex.test(credentials.password)) {
      setPasswordError("Password must contain 8 characters");
    }

    const loginData = {
      email: credentials.email,
      password: credentials.password,
    };

    try {
      apiCall.post(
        "http://3.16.194.5:8000/api/v1/auth/host/signin",
        loginData,
        (resp: any) => {
          if (resp) {
            setCookie("Token", resp.data.token);
            setTimeout(() => {
              window.location.href = "/";
            }, 500);
          } else {
            console.log("Login Failed");
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Login-page">
      <div className="leftside">
        <article className="welcome">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "120px", borderRadius: "50%" }}
          ></img>
          <div className="Message">
            <h2>Karthick Ravi</h2>
            <h3>f r o n t e n d d e v e l o p e r</h3>
            <h4>Hello King!!!</h4>
          </div>
        </article>
      </div>
      <div className="rightside">
        <form className="userform" onSubmit={(e) => e.preventDefault()}>
          <div className="input">
            <div className="input-items">
              <h1>Sign in</h1>
              <div className="user-input">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter ereact-cookiesmail"
                  className="email-input"
                  value={credentials.email}
                  name="email"
                  onChange={handleInputChange}
                ></input>
                {emailError && <div className="error">{emailError}</div>}
              </div>
              <div className="user-input-password">
                <label htmlFor="password">Password</label>
                <input
                  type={hide ? "text" : "password"}
                  id="password"
                  placeholder="Enter password"
                  className="email-input"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                ></input>
                {passwordError && <div className="error">{passwordError}</div>}
                <div className={inputFocus ? "moves" : "move"}>
                  <button className="iconbutt" onClick={handleClick}>
                    {hide ? (
                      <AiFillEye className="hide" style={{}} />
                    ) : (
                      <AiFillEyeInvisible className="hide" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="welcome-butt"
                  onClick={handleSubmit}
                >
                  Welcome King !!!
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
