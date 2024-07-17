import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Notes from "./Notes";

interface IContentProps {}

const Content: React.FunctionComponent<IContentProps> = (props) => {
  return (
    <Routes>
      <Route path="/Notes" element={<Notes />} />
      {/* <Route path="/Education" element={<Education />} />
      <Route path="/Experience" element={<Experience />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Home />} />
    </Routes>
  );
};

export default Content;
