import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="flex h-screen w-full bg-main-bg">
      <SideBar></SideBar>
      <div className="flex flex-1 flex-col min-w-0">
        <NavBar></NavBar>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default Layout;
