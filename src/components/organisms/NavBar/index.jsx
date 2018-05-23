import React from "react";
import styled from "styled-components";

import { AppContext } from "state/context/app";

import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const NavBar = () => (
  <AppContext.Consumer>
    {app => (
      <StyledNavigation>
        <LeftNav app={app} />
        <RightNav app={app} />
      </StyledNavigation>
    )}
  </AppContext.Consumer>
);

const StyledNavigation = styled.nav`
  /* display */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  /* box */
  position: relative;
  width: 100%;

  /* colors */
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  /* text */
  font-size: 1.1em;
`;

export default NavBar;
