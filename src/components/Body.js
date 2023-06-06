import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

function Body() {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  return (
    <div className="flex">
      {<Sidebar />}
      <MainContainer />
    </div>
  );
}

export default Body;
