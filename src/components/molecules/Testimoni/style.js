import styled from "styled-components/macro";

export const MainTestimoni = styled.div`
  padding: 0 12vw;
  margin-bottom: 12rem;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #100d0d;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-left: 2rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const TestimoniWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 339px;
  box-sizing: border-box;
  padding: 1.5rem 2.5rem;
  background-color: #910603;
  border-radius: 25px;
  margin-top: 2rem;
  .rec-carousel-wrapper {
    .rec-pagination {
      width: 15%;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 768px) {
        width: 30%;
      }

      .rec-dot {
        box-shadow: none;
        background-color: transparent;
        border: 1px solid #ffc300;
      }
      .rec-dot_active {
        transform: scale(1.1);
        background-color: #ffc300;
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: max-content;
  }
`;
export const Item = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const ImgWrapper = styled.div`
  width: 275px;
  height: 210px;
  border-radius: 25px 25px 25px 0;
  overflow: hidden;
  .img-cover {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;
export const MetaWrapper = styled.div`
  width: 60%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;
export const Desc = styled.h4`
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const Role = styled.p`
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  font-weight: 400;
`;
