import React from "react";
import PropTypes from "prop-types";
import { StyledList } from "styles";
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

LeftNav.propTypes = {
  appName: PropTypes.string.isRequired
};

export default LeftNav;
