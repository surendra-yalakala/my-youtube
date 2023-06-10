import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function Body() {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  return (
    <div className="flex">
      {<Sidebar />}
      <Outlet />
    </div>
  );
}

export default Body;
