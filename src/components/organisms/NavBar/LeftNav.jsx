import React from "react";
import styled from "styled-components";

import { ListLink } from "components/atoms";

const LeftNav = ({ app }) => {
  const { name } = app;
  const title = `Welcome to ${name}`;
  const textStyle = {
    margin: 0
  };

  return (
    <StyledList>
      <ListLink
        to="/"
        render={
          <h1 title={title} style={textStyle}>
            {name}
          </h1>
        }
      />
    </StyledList>
  );
};

const StyledList = styled.ul`
  /* display */
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  /* box */
  padding: 0;
  margin-left: 2%;
  list-style-type: none;
`;

export default LeftNav;
