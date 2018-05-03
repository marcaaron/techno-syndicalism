import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => (
  <StyledContainer>
    <Link to="/">Landing Page</Link>
    <Link to="/learn">Learn More</Link>
    <Link to="/unions">Unions</Link>
    <Link to="/workplaces">Workplaces</Link>
    <Link to="/profiles">Profiles</Link>
    <Link to="/my">My Home</Link>
    <Link to="/my/workplaces">My Workplaces</Link>
    <Link to="/my/dashboard">My Dashboard</Link>
    <Link to="/my/settings">My Settings</Link>
  </StyledContainer>
);

const StyledContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
`;

export default NavBar;
