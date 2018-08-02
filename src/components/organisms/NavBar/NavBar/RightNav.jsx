import React from "react";
import { ListLink, TextVisibility } from "components/atoms";
import { Home } from "components/atoms/Icons";

import { NavItemContainer, StyledList } from "styles";
import SubNavNoAuth from "./SubNavNoAuth";
import SubNavWithAuth from "./SubNavWithAuth";

const RightNav = ({ userInfo }) => {
  console.log(userInfo);
  return (
    <StyledList>
      <ListLink to="/home" render={<HomeView />} />
      {userInfo.isAuthenticated ? (
        <SubNavWithAuth {...userInfo} />
      ) : (
        <SubNavNoAuth />
      )}
    </StyledList>
  );
};

const HomeView = () => (
  <NavItemContainer>
    <Home />
    <TextVisibility>Home</TextVisibility>
  </NavItemContainer>
);

export default RightNav;
