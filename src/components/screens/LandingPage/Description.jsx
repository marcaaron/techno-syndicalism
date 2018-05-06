import React from "react";
import styled from "styled-components";

const Description = () => (
  <StyledContainer>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </StyledContainer>
);

const StyledContainer = styled.p`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 30px;
  width: 80%;
`;

export default Description;
