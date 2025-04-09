import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../pages/layout02/Header";
import Footer from "../../pages/layout02/Footer";

function AdminLayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;