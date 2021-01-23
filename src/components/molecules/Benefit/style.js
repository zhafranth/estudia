import styled from "styled-components/macro";

export const MainBenefit = styled.div`
  padding: 0 12vw;
  margin: 12rem 0;
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

export const WrapperBenefit = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ItemBenefit = styled.div`
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 100%;
    /* display: flex; */
  }
`;

export const Point = styled.h4`
  color: #ffc300;
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0;
`;
export const TitleBenefit = styled.h5`
  color: #100d0d;
  font-weight: 700;
  font-size: 24px;
  margin: 1.2rem 0 0.8rem 0;
  @media screen and (max-width: 768px) {
    /* color: red; */
  }
`;
export const DescBenefit = styled.p`
  color: #100d0d;
  font-weight: 400;
  font-size: 14px;
  margin: 0;
`;
