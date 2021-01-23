import styled from "styled-components/macro";

export const MainNavbar = styled.div`
  position: relative;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12vw;
  &.primary {
    background-color: #910603;
  }
  @media screen and (max-width: 768px) {
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0; */
    /* z-index: 99; */
    background-color: #fff;
    box-shadow: 2px 1px 32px -6px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 1px 32px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 1px 32px -6px rgba(0, 0, 0, 0.75);
  }
`;

export const Logo = styled.div`
  /* width:auto;
  height:auto;
  object-fit */
`;

export const Menu = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    z-index: -1;
    position: absolute;
    /* top: 0; */
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateY(-250px);
    /* opacity: ${(props) => (props.open ? 1 : 0)};
    visibility: ${(props) => (props.open ? "visility" : "hidden")}; */
    flex-direction: column;
    background-color: #fff;
    transition: transform 0.3s linear;
    text-align: center;
    padding: 3rem;
    height: 150px;
    &.isOpen {
      bottom: -80px;
      transform: translateY(165px);
      transition: transform 0.3s linear;
    }
  }
`;

export const MenuItem = styled.div`
  margin-left: 2rem;
  cursor: pointer;
  .link {
    text-decoration: none;
    color: #910603;
    font-size: 1rem;
    font-weight: 400;
    &.primary {
      color: #fff;
      @media screen and (max-width: 768px) {
        color: #910603;
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: #910603;
  display: none;
  background-color: transparent;
  outline: none;
  border: 0;
  @media screen and (max-width: 768px) {
    display: block;
  }
  &.primary {
    color: #fff;
  }
`;
