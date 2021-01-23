import React from "react";
import { MainLayout } from "./style";

// Components
import { Navbar, Footer } from "../index";

const Layout = ({ children, primary }) => {
  return (
    <MainLayout>
      <Navbar primary={primary} />
      {children}
      <Footer />
    </MainLayout>
  );
};

export default Layout;
