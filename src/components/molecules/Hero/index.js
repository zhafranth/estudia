import React from "react";
import { MainHero, HeroContent, TitleHero, DescHero, HeroImage } from "./style";

// Components
import Button from "../../atoms/Button";

// Image
import HeroImg from "../../../assets/Images/Hero.png";
import BgHeroImg from "../../../assets/Images/BgHero.png";

const index = ({ refKelas }) => {
  const handleShow = () => {
    window.scrollTo({
      behavior: "smooth",
      top: refKelas.current.offsetTop - 30,
    });
  };
  return (
    <MainHero>
      <HeroContent>
        <TitleHero>Spanish Without Limits</TitleHero>
        <DescHero>Get a discount for 3 mounths of learning</DescHero>
        <Button onClick={handleShow}>Study Now</Button>
      </HeroContent>
      <HeroImage>
        <img
          src={HeroImg}
          alt="Hero Estudia"
          className="img-hero"
          style={{ zIndex: -1 }}
        />
        <img
          src={BgHeroImg}
          alt="Bg Hero Estudia"
          className="img-hero"
          style={{ zIndex: -2 }}
        />
      </HeroImage>
    </MainHero>
  );
};

export default index;
