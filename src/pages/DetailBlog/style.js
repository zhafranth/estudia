import styled from "styled-components/macro";

export const ImgWrapper = styled.div`
  position: relative;
  z-index: -2;
  padding: 0 12vw;
  border-radius: 15px;
  overflow: hidden;
  height: 340px;
  margin-top: 2.5rem;
  img {
    border-radius: 20px;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const Desc = styled.div`
  padding: 0 12vw;
  @media screen and (max-width: 768px) {
    text-align: justify;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  text-align: center;
`;
