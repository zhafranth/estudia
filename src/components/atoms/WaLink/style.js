import styled from "styled-components/macro";

export const WrapperLink = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  display: flex;
  align-items: center;
  gap: 2rem;
  div {
    width: 350px;
    overflow: hidden;
    span {
      margin-left: 100%;
      overflow: hidden;
      width: 350px;
      text-align: right;
      display: block;
      transition: all 0.2s linear;
      height: 20px;
    }
  }
  &:hover {
    a {
      background-color: #54bd60;
      cursor: pointer;
    }
    div {
      span {
        margin-left: 0;
        transition: all 0.3s linear;
      }
    }
  }
`;

export const ButtonLink = styled.a`
  /* display: block; */
  text-decoration: none;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background-color: #4ac358;

  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: #fff;
  }
`;
