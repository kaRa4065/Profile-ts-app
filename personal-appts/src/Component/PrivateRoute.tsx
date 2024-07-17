import * as React from "react";
import { Routes, Route } from "react-router";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Content from "./Content";

interface IPrivateRouteProps {}

const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = (props) => {
  return (
    <div className="privateroute">
      <Sidebar />
      <div className="nav">
        <Navbar />
        <Content />
      </div>
    </div>
  );
};

export default PrivateRoute;
