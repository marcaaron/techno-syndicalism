import React from "react";
import styled, { keyframes } from "styled-components";

import logo from "../../../assets/img/logo.svg";

const Logo = () => <StyledImage src={logo} alt="logo" />;

const spin = keyframes`
  {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`;

const StyledImage = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 80px;
`;

export default Logo;
