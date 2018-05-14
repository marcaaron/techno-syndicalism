import React from "react";
import styled from "styled-components";

import { AppContext } from "state/context/app";

import { ListLink } from "components/atoms";
import { Home } from "components/atoms/Icons";
import SubNavNoAuth from "./SubNavNoAuth";
import SubNavWithAuth from "./SubNavWithAuth";

const NavBar = () => (
  <Wrapper>
    <AppContext.Consumer>
      {app => (
        <StyledNavigation>
          <NavLeft>
            <ListLink
              to="/"
              render={<p title={`Welcome to ${app.name}`}>{app.name}</p>}
            />
          </NavLeft>
          <NavRight>
            <ListLink to="/home" render={<Home />} />
            {app.isAuthenticated ? (
              <SubNavWithAuth {...app} />
            ) : (
              <SubNavNoAuth />
            )}
          </NavRight>
        </StyledNavigation>
      )}
    </AppContext.Consumer>
  </Wrapper>
);

const Wrapper = styled.div`
  grid-area: nav;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50% 0 0 50%;
`;

const StyledNavigation = styled.nav`
  /* display */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* box */
  position: relative;
  width: 100%;
  height: 100%;
  transform: rotate(2deg) skew(2deg);
  /* colors */
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  /* text */
  font-size: 1.1em;
`;

const NavLeft = styled.ul`
  /* display */
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transform: rotate(-2deg) skew(-2deg);
  /* box */
  padding: 0;
  list-style-type: none;
`;

const NavRight = styled.ul`
  /* display */
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transform: rotate(-2deg) skew(-2deg);
  /* box */
  padding: 0;
  list-style-type: none;
`;

export default NavBar;
