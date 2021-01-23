import React from "react";
import { Link } from "react-router-dom";
import {
  MainFooter,
  FooterContent,
  LogoFooter,
  FooterItem,
  Title,
  Copyright,
  Address,
} from "./style";

// Logo & Icons
import Logo from "../../../assets/Logo/logo-white.png";
import { AiTwotonePhone } from "react-icons/ai";

import Instagram from "../../../assets/Icons/instagam.svg";
import Facebook from "../../../assets/Icons/facebook.svg";
import Twitter from "../../../assets/Icons/twitter.svg";

const Footer = () => {
  return (
    <MainFooter>
      <FooterContent>
        <LogoFooter>
          <Link className="link" to="/">
            <img src={Logo} alt="Estudia Logo" />
          </Link>
          <Address>
            Jakarta, Indonesia <br />
            <AiTwotonePhone /> +62 812 9090 6836
          </Address>
        </LogoFooter>
        <FooterItem>
          <Title>Tentang Kami</Title>
          <Link className="link" to="/about">
            Profile
          </Link>
          <Link className="link" to="/artikel/artikel">
            Blog
          </Link>
        </FooterItem>
        <FooterItem>
          <Title>Kelas Bahasa Spanyol</Title>
          <Link className="link" to="/artikel/kelas-bahasa-spanyol">
            Bahasa Spanyol
          </Link>
          <Link className="link" to="/artikel/tata-bahasa-dan-kosakata">
            Tata Bahasa dan Kosakata
          </Link>
        </FooterItem>
        <FooterItem>
          <Title>Kontak</Title>
          <a
            className="link"
            href="https://www.facebook.com/Estudia-Course-101770681916033"
            className="link"
            rel="noreferrer"
            target="_blank"
          >
            <img src={Facebook} alt="facebook estudia" />
            Estudia
          </a>
          <a
            className="link"
            href="https://www.instagram.com/estudiacourse"
            className="link"
            rel="noreferrer"
            target="_blank"
          >
            <img src={Instagram} alt="instagram estudia" />
            Estudia
          </a>
          <a
            className="link"
            href="https://twitter.com/estudiacourse"
            className="link"
            rel="noreferrer"
            target="_blank"
          >
            <img src={Twitter} alt="twitter estudia" />
            Estudia
          </a>
        </FooterItem>
      </FooterContent>
      <Copyright />
    </MainFooter>
  );
};

export default Footer;
