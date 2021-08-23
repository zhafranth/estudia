import React from "react";
import { MainLayout } from "./style";

// Components
import { Navbar, Footer } from "../index";
import WaLink from "../../atoms/WaLink";
const Layout = ({ children, primary }) => {
  return (
    <MainLayout>
      <Navbar primary={primary} />
      {children}
      <Footer />
      <WaLink />
    </MainLayout>
  );
};

export default Layout;
