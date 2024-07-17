import React from "react";
import Login from "./Component/Login";
import { isLoggedIn } from "./models/cookie";
import PrivateRoute from "./Component/PrivateRoute";
import PublicRoute from "./Component/PublicRoute";

function App() {
  return (
    <div className="Main">
      {isLoggedIn() ? <PrivateRoute /> : <PublicRoute />}
    </div>
  );
}

export default App;
