import styled from "styled-components/macro";

export const WrapperBlog = styled.div`
  box-sizing: border-box;
  padding: 0 12vw;
  h2 {
    font-size: 48px;
    color: #100d0d;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 800;
  }
`;

export const ListPengajar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const CardProfile = styled.div`
  cursor: pointer;
  &:hover {
    .img-wrapper {
      &::after {
        top: -10px;
        left: -5px;
      }
    }
    .name {
      transform: translateY(-40px);
    }
  }
  &:active {
    .name {
      transform: translateY(-30px);
    }
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  &::after {
    position: absolute;
    top: -20px;
    left: -10px;
    content: "";
    width: 195px;
    height: 195px;
    border-radius: 100px;
    z-index: -1;
    margin-left: -20px;
    background-color: #ffc300;
    transition: all 0.2s ease-in-out;
  }
`;

export const Name = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  background-color: #910603;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-20px);
  transition: all 0.2s ease-in-out;
  h5 {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
  }
`;
