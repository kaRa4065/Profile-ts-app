import * as React from "react";
import { Routes, Route, Navigate } from "react-router";
import Login from "./Login";

interface IPublicRouteProps {}

const PublicRoute: React.FunctionComponent<IPublicRouteProps> = (props) => {
  return (
    <div className="routepage">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default PublicRoute;
