import styled from "styled-components/macro";

export const MainKelas = styled.div`
  padding: 0 12vw;
  margin-bottom: 12rem;
`;
export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #100d0d;
  margin: 0;
  text-align: center;
  margin-bottom: 1.5rem;
  /* width: 320px; */
  span {
    color: #910603;
  }
`;
export const KelasWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Card = styled.div`
  max-width: 264px;
  width: 25%;
  border-radius: 10px;
  border: 1px solid #c9c9c9;
  padding: 1rem;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;
  cursor: default;
  @media screen and (max-width: 768px) {
    width: 80%;
    margin-bottom: 2.5rem;
  }
`;
export const ImgWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  height: 151px;
  border-radius: 10px;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export const CardTitle = styled.h5`
  cursor: default;
  color: #910603;
  font-size: 24px;
  font-weight: 800;
  margin: 0;
`;
export const Desc = styled.p`
  cursor: default;
  font-size: 14px;
  color: #565656;
  line-height: 1.2rem;
  font-weight: 400;
  margin: 1.2rem 0;
`;
export const Time = styled.p`
  cursor: default;
  margin: 0;
  color: #100d0d;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 1rem;
`;
export const Button = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 5px 12%;
  background-color: transparent;
  border: 1px solid #ffc300;
  color: #100d0d;
  font-weight: 600;
  border-radius: 30px;
  &:hover {
    background-color: #ffc300;
    color: #fff;
  }
`;
