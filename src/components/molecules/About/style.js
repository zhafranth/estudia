import styled from "styled-components/macro";

export const MainAbout = styled.div`
  /* width: 100vw; */
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-around;
  padding: 3.5rem 12vw;
  margin-top: 15rem;
  /* margin-bottom: 10rem; */
  /* box-sizing: border-box; */
  position: relative;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 30%;
  img {
    position: absolute;
    transform: scale(1.1);
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const AboutMeta = styled.div`
  width: 50%;
  color: #100d0d;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Title = styled.h4`
  margin: 0;
  display: inline-block;
  width: 60%;
  font-size: 48px;
  font-weight: 700;
  span {
    color: #910603;
  }
`;
export const Desc = styled.p`
  line-height: 1.6rem;
  font-weight: 400;
  font-size: 18px;
`;
