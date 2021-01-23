import styled from "styled-components/macro";

export const WrapperBlog = styled.div`
  position: relative;
  z-index: -2;
`;

export const WrapperHero = styled.div`
  width: 100%;
  height: 300px;
  .img-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* filter: grayscale(84%) blur(1px);
    -webkit-filter: grayscale(84%) blur(1px);
    -moz-filter: grayscale(84%) blur(1px); */
  }
`;

export const Title = styled.h2`
  cursor: default;
  font-weight: 700;
  color: #100d0d;
  text-align: center;
  position: absolute;
  top: 30%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  span {
    font-weight: 400;
  }
`;
