import React from "react";
import { MainButton } from "./style";

const index = ({ children, ...rest }) => {
  return <MainButton {...rest}>{children}</MainButton>;
};

export default index;
