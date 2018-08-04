import React, { Fragment } from "react";
import { ListLink, TextVisibility, ButtonSignout } from "components/atoms";
import { Home } from "components/atoms/Icons";
import { NavItemContainer, StyledList } from "styles";
import SubNavNoAuth from "./SubNavNoAuth";
import SubNavWithAuth from "./SubNavWithAuth";

const RightNav = ({ user }) => {
  return (
    <StyledList>
      <ListLink to="/home" render={<HomeView />} />
      {user ? (
        <Fragment>
          <SubNavWithAuth {...user} />
          <ButtonSignout />
        </Fragment>
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
