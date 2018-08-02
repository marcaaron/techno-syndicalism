import React from "react";
import { StyledNavigation } from "styles";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

const NavBar = ({ userInfo }) => {
  console.log(userInfo);
  return (
    <StyledNavigation>
      <LeftNav appName="Wobbly" />
      <RightNav userInfo={userInfo} />
    </StyledNavigation>
  );
};

export default NavBar;
