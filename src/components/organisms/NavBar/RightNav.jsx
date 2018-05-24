import React from "react";
import styled from "styled-components";

import { ListLink, TextVisibility } from "components/atoms";
import { Home } from "components/atoms/Icons";

import NavItemContainer from "./NavItemContainer";
import SubNavNoAuth from "./SubNavNoAuth";
import SubNavWithAuth from "./SubNavWithAuth";

const RightNav = ({ app }) => (
  <StyledList>
    <ListLink to="/home" render={<HomeView />} />
    {app.isAuthenticated ? <SubNavWithAuth {...app} /> : <SubNavNoAuth />}
  </StyledList>
);

const HomeView = () => (
  <NavItemContainer>
    <Home />
    <TextVisibility>Home</TextVisibility>
  </NavItemContainer>
);

const StyledList = styled.ul`
  /* display */
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  /* box */
  padding: 0;
  margin-right: 2%;
  list-style-type: none;
`;

export default RightNav;
