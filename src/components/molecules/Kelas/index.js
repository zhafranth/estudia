import React, { useRef } from "react";
import {
  MainKelas,
  Title,
  KelasWrapper,
  Card,
  ImgWrapper,
  CardTitle,
  Desc,
  Time,
  Button,
} from "./style";

// Images
import ImgCard from "../../../assets/Images/cover-card.png";
import Kelas1 from "../../../assets/Images/benefit1.jpeg";
import Kelas2 from "../../../assets/Images/benefit2.jpeg";
import Kelas3 from "../../../assets/Images/benefit3.jpeg";

const Kelas = ({ refKelas }) => {
  return (
    <MainKelas ref={refKelas}>
      <Title>
        Course <br />
        <span>Kelas Bahasa Spanyol</span>
      </Title>
      <KelasWrapper>
        <Card>
          <ImgWrapper>
            <img src={Kelas1} alt="" />
          </ImgWrapper>
          <CardTitle>A1.1</CardTitle>
          {/* <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            nulla repellendus voluptas cum mollitia placeat.
          </Desc> */}
          <Time>
            <img src="" alt="" /> 30 Jam
          </Time>
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSele_Ax6Bb2XHuZycf2mLOF-mjQCTPEH2Ay535Fo1wkjPdVlQ/viewform"
            rel="noreferrer"
            target="_blank"
          >
            Study Now
          </Button>
        </Card>
        <Card>
          <ImgWrapper>
            <img src={Kelas2} alt="" />
          </ImgWrapper>
          <CardTitle>A1.2</CardTitle>
          {/* <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            nulla repellendus voluptas cum mollitia placeat.
          </Desc> */}
          <Time>
            <img src="" alt="" /> 30 Jam
          </Time>
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSele_Ax6Bb2XHuZycf2mLOF-mjQCTPEH2Ay535Fo1wkjPdVlQ/viewform"
            rel="noreferrer"
            target="_blank"
          >
            Study Now
          </Button>
        </Card>
        <Card>
          <ImgWrapper>
            <img src={Kelas3} alt="" />
          </ImgWrapper>
          <CardTitle>A1.3</CardTitle>
          {/* <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            nulla repellendus voluptas cum mollitia placeat.
          </Desc> */}
          <Time>
            <img src="" alt="" /> 30 Jam
          </Time>
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSele_Ax6Bb2XHuZycf2mLOF-mjQCTPEH2Ay535Fo1wkjPdVlQ/viewform"
            rel="noreferrer"
            target="_blank"
          >
            Study Now
          </Button>
        </Card>
      </KelasWrapper>
    </MainKelas>
  );
};

export default Kelas;
