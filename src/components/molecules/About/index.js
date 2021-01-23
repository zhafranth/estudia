import React from "react";
import { MainAbout, ImgWrapper, AboutMeta, Title, Desc } from "./style";

// Image
import ImgAbout from "../../../assets/Images/About.png";
import BgImgAbout from "../../../assets/Images/BgAbout.png";

const About = () => {
  return (
    <MainAbout>
      <ImgWrapper>
        <img src={ImgAbout} alt="About Image" style={{ zIndex: 2, top: 0 }} />
        <img
          src={BgImgAbout}
          alt="Background About Image"
          style={{ zIndex: 1, left: "-20px", top: "20px" }}
        />
      </ImgWrapper>
      <AboutMeta>
        <Title>
          Tentang Kami <span>Estudia</span>
        </Title>
        <Desc>
          Selamat datang di ¡Estudia! Di sini, kamu bisa belajar Bahasa spanyol
          online dengan mudah dan menyenangkan. Biarpun Bahasa Spanyol itu
          lumayan susah untuk orang Indonesia karena peraturan tata Bahasa
          (grammar) yang ribet pake banget. Tapi, di sini kamu bisa belajar
          Bahasa Spanyol dengan mudah dan asik.
        </Desc>
        <br />
        <Desc>
          Selamat datang di ¡Estudia! Di sini, kamu bisa belajar Bahasa spanyol
          online dengan mudah dan menyenangkan. Biarpun Bahasa Spanyol itu
          lumayan susah untuk orang Indonesia karena peraturan tata Bahasa
          (grammar) yang ribet pake banget. Tapi, di sini kamu bisa belajar
          Bahasa Spanyol dengan mudah dan asik.
        </Desc>
      </AboutMeta>
    </MainAbout>
  );
};

export default About;
