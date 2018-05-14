import React from "react";
import styled from "styled-components";

const Description = () => (
  <StyledList>
    <li>Value Proposition</li>
    <li>Value Proposition</li>
    <li>Value Proposition</li>
    <li>Value Proposition</li>
  </StyledList>
);

const StyledList = styled.ul`
  padding: 10px 30px;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default Description;
