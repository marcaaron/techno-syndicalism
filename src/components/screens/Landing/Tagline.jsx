import React from "react";
import styled from "styled-components";

const Tagline = () => (
  <StyledText>Connect with work friends, on or off the clock</StyledText>
);

const StyledText = styled.p`
  background-color: ${({ theme }) => theme.colors.white};
  transform: rotate(-1deg) skew(-1deg);
  padding: 10px 30px;
  font-size: 1.3em;
  font-weight: bold;
  text-align: center;
`;

export default Tagline;
