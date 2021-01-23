import React from "react";
import { Layout, Kelas } from "../../components/molecules";
import {
  Hero,
  About,
  Title,
  AboutWrapper,
  ImgWrapper,
  MetaDesc,
  Desc,
} from "./style";

// images
import ImgHero from "../../assets/Images/hero-blog.png";
import ImgAbout from "../../assets/Images/about-img.png";

const AboutPage = () => {
  return (
    <Layout primary={true}>
      <Hero>
        <img src={ImgHero} alt="image hero" className="img-cover" />
      </Hero>
      <About>
        <Title>
          Estudia <br />
          <span>Curso de espanol</span>
        </Title>
        <AboutWrapper>
          <ImgWrapper>
            <img
              src={ImgAbout}
              alt="estudia curso de espanol"
              className="img-cover"
            />
          </ImgWrapper>
          <MetaDesc>
            <Desc>
              Selamat datang di ¡Estudia! Di sini, kamu bisa belajar Bahasa
              spanyol online dengan mudah dan menyenangkan. Biarpun Bahasa
              Spanyol itu lumayan susah untuk orang Indonesia karena peraturan
              tata Bahasa (grammar) yang ribet pake banget. Tapi, di sini kamu
              bisa belajar Bahasa Spanyol dengan mudah dan asik.
            </Desc>
            <Desc>
              Meskipun belajar online, tapi kamu ga akan kesulitan dan
              suasananya ga bakalan kaku. Para tutor di Estudia masih sangat
              amat berjiwa muda dan flexible. Kamu juga bisa tanya tentang
              apapun yang berkaitan dengan Bahasa Spanyol loh.
            </Desc>
            <Desc>
              Kenapa sih mesti belajar Bahasa Spanyol? Hmmm jawabannya banyak
              sih, tergantung niat kamu apa. Ada yang belajar Bahasa Spanyol
              untuk belajar atau bekerja di negara-negara berbahasa Spanyol atau
              ada juga yang memang mengkhususkan diri belajar Bahasa Spanyol
              untuk cari jodoh :D
            </Desc>
            <Desc>
              Apapun tujuan kamu belajar Bahasa Spanyol, pasti kita bantu.
              Tinggal bilang aja ke tutornya yaaaa.
            </Desc>
          </MetaDesc>
        </AboutWrapper>
      </About>
      <Kelas />
    </Layout>
  );
};

export default AboutPage;
