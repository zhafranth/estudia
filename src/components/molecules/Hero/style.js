import styled from "styled-components/macro";

export const MainHero = styled.div`
  position: relative;
  display: flex;
  padding: 0 12vw;
  z-index: -2;
`;

export const HeroContent = styled.div`
  width: 35vw;
  margin-top: 2.5rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const TitleHero = styled.h2`
  font-size: 64px;
  font-weight: 700;
  color: #910603;
  margin: 0;
`;

export const DescHero = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #565656;
  margin: 1.5rem 0;
`;

export const HeroImage = styled.div`
  .img-hero {
    position: absolute;
    top: -100px;
    right: 0;
  }
  @media screen and (max-width: 768px) {
    .img-hero {
      &:nth-child(1) {
        display: none;
      }
    }
  }
`;
