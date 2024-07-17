import * as React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { Outlet } from "react-router-dom";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <div className="connect ">
      <div style={{ display: "flex", justifyContent: "end" }}>
        <FaLinkedinIn style={{ padding: "10px", cursor: "pointer" }} />
        <AiOutlineFacebook style={{ padding: "10px", cursor: "pointer" }} />
        <AiOutlineInstagram style={{ padding: "10px", cursor: "pointer" }} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
