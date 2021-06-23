import React from "react";
import { MainCard, ImgWrapper, Title, Desc, Time } from "./style";

// Image
import ImgCover from "../../../assets/Images/cover-blog.png";

const Card = ({ title, image, highlight }) => {
  return (
    <MainCard>
      <ImgWrapper>
        <img src={image} alt="image " className="img-cover" />
      </ImgWrapper>
      <Title>{title}</Title>
      <Desc>{highlight && highlight}</Desc>
      {/* <Time>November 17, 2020</Time> */}
    </MainCard>
  );
};

export default Card;
