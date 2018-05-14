import React from "react";
import styled from "styled-components";

import logo from "assets/img/logo.svg";

const Logo = () => <StyledImage alt="App" src={logo} />;

const StyledImage = styled.img`
  background-color: ${({ theme }) => theme.colors.white};
  align-self: center;
  display: block;
  width: 90px;
  border-radius: 10%;
`;

export default Logo;
