import styled from "styled-components/macro";

export const MainCard = styled.div`
  /* height: 50vh; */
  box-sizing: border-box;
  padding: 12px;
  border-radius: 10px;
  max-width: 365px;

  margin-bottom: 2rem;
  height: max-content;
  cursor: pointer;
  &:hover {
    box-shadow: -2px 5px 43px -20px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -2px 5px 43px -20px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -2px 5px 43px -20px rgba(0, 0, 0, 0.75);
    transition: box-shadow 0.2s linear;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ImgWrapper = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
  .img-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Title = styled.h4`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: #910603;
  }
`;
export const Desc = styled.p`
  line-height: 1.5rem;
  cursor: default;
`;
export const Time = styled.p`
  font-weight: 600;
  cursor: default;
`;
