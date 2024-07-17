import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.jpg";
import { removeCookie } from "typescript-cookie";

interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  const handleLogout = () => {
    removeCookie("Token");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  };
  return (
    <div className="sidebar">
      <div className="logo-name">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "100px", borderRadius: "50%" }}
        ></img>
        <h2>Karthick Ravi</h2>
      </div>

      <div className="sidebar-links">
        <Link className="main-links" style={{}} to={"/"}>
          Home
        </Link>
        <Link className="main-links" to={"/Education"}>
          Qualification
        </Link>
        <Link className="main-links" to={"/Experience"}>
          Experience
        </Link>
        <Link className="main-links" to={"/Notes"}>
          Notes
        </Link>
        <Link className="main-links" onClick={handleLogout} to={"/Login"}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
