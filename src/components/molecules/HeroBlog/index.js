import React from "react";
import { WrapperHero, Title, WrapperBlog } from "./style";
import BgHero from "../../../assets/Images/bg-hero-blog.jpg";

const HeroBlog = ({ title }) => {
  return (
    <WrapperBlog>
      <WrapperHero>
        <Title>
          {title} <br />
          <span>Clase de español</span>
        </Title>
        <img src={BgHero} alt="Hero Blog" className="img-cover" />
      </WrapperHero>
    </WrapperBlog>
  );
};

export default HeroBlog;
