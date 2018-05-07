import React from "react";
import styled from "styled-components";

import { AppContext } from "../../../state/context/app";

const Tagline = () => (
  <AppContext.Consumer>
    {app => <StyledContainer>{app.tagline}</StyledContainer>}
  </AppContext.Consumer>
);

const StyledContainer = styled.p`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 30px;
  font-size: 1.1em;
  font-weight: bold;
  transform: rotate(-1deg);
`;

export default Tagline;
