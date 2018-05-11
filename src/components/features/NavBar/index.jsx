import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { DevLoginButton } from "../../features";

const NavBar = () => (
  <StyledContainer>
    <Link to="/">Landing Page</Link>
    <Link to="/home">My Home</Link>
    <Link to="/learn">Learn More</Link>
    <Link to="/unions">Unions</Link>
    <Link to="/workplaces">Workplaces</Link>
    <Link to="/profiles">Profiles</Link>
    <Link to="/home/workplaces">My Workplaces</Link>
    <Link to="/home/dashboard">My Dashboard</Link>
    <Link to="/home/settings">My Settings</Link>
    <Link to="/account">Login/Signup</Link>
    <DevLoginButton />
  </StyledContainer>
);

const StyledContainer = styled.nav`
  /* display */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  /* box */
  height: 40px;

  /* colors */
  background-color: ${({ theme }) => theme.colors.white};

  /* text */
  font-size: 0.6em;
`;

export default NavBar;
