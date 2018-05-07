import React from "react";
import styled from "styled-components";

import { AppContext } from "../../../state/context/app";

const Title = () => (
  <AppContext.Consumer>
    {app => <StyledContainer>{app.name}</StyledContainer>}
  </AppContext.Consumer>
);

const StyledContainer = styled.h1`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 30px;
  font-size: 2em;
  transform: rotate(1deg);
`;

export default Title;
