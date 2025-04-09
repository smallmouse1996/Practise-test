import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../pages/layout01/Header";

function UserLayout() {

  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;