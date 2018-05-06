import React from "react";
import styled from "styled-components";

import Logo from "./Logo";

const Header = () => (
  <StyledHeader className="App-header">
    <Logo />
  </StyledHeader>
);

const StyledHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  margin: 0 0 50px;
`;

export default Header;
