import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { ListLink } from "components/atoms";

const LeftNav = ({ appName }) => {
  const title = `Welcome to ${appName}`;
  const textStyle = {
    margin: 0
  };

  return (
    <StyledList>
      <ListLink
        to="/"
        render={
          <h1 title={title} style={textStyle}>
            {appName}
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

LeftNav.propTypes = {
  appName: PropTypes.string.isRequired
};

export default LeftNav;
