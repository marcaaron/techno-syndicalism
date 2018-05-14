import React from "react";
import styled from "styled-components";

import { AppContext } from "state/context/app";

const Title = () => (
  <AppContext.Consumer>
    {app => <StyledHeaderText>{app.name}</StyledHeaderText>}
  </AppContext.Consumer>
);

const StyledHeaderText = styled.h1`
  background-color: ${({ theme }) => theme.colors.white};

  font-size: 3.3em;
`;

export default Title;
