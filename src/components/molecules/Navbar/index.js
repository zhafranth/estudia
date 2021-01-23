import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MainNavbar, Logo, Menu, MenuItem, Button } from "./style";

// Icons
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

// Logo
import LogoEstudia from "../../../assets/Logo/logo.svg";
import LogoWhite from "../../../assets/Logo/logo-white.svg";

const Navbar = ({ primary }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShow = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MainNavbar className={primary ? "primary" : ""}>
      <Logo>
        <Link to="/">
          {primary ? (
            <img src={LogoWhite} alt="Estudia" />
          ) : (
            <img src={LogoEstudia} alt="Estudia" />
          )}
        </Link>
      </Logo>
      <Button onClick={handleShow} className={primary && "primary"}>
        {isOpen ? <RiCloseLine /> : <FaBars />}
      </Button>
      <Menu open={isOpen} className={isOpen && "isOpen"}>
        <MenuItem>
          <Link
            to="/artikel/kelas-bahasa-spanyol"
            className={`${primary ? "primary link" : "link"}`}
          >
            Kelas Bahasa Spanyol
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/artikel/tata-bahasa-dan-kosakata"
            className={`${primary ? "primary link" : "link"}`}
          >
            Tata Bahasa dan Kosakata
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/artikel/artikel"
            className={`${primary ? "primary link" : "link"}`}
          >
            Blog
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about" className={`${primary ? "primary link" : "link"}`}>
            Tentang Kami
          </Link>
        </MenuItem>
      </Menu>
    </MainNavbar>
  );
};

export default Navbar;
