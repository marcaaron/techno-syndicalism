import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Links = () => (
  <StyledContainer>
    <Link to="/learn">Learn More</Link>
    <Link to="/workplaces">Find My Workplace</Link>
    <Link to="/account">Login/Signup</Link>
  </StyledContainer>
);

const StyledContainer = styled.p`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export default Links;
