import React from "react";
import styled from "styled-components";

const Description = () => (
  <StyledContainer>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </StyledContainer>
);

const StyledContainer = styled.p`
  /* box */
  padding: 10px 30px;
  width: 90%;

  /* color */
  background-color: ${({ theme }) => theme.colors.white};

  /* text */
  font-size: 0.9em;
`;

export default Description;
