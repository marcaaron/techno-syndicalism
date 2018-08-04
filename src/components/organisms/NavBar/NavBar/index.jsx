import React from "react";
import { StyledNavigation } from "styles";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const NavBar = ({ user }) => {
  console.log(user);
  return (
    <StyledNavigation>
      <LeftNav appName="Wobbly" />
      <RightNav user={user} />
    </StyledNavigation>
  );
};

export default NavBar;
