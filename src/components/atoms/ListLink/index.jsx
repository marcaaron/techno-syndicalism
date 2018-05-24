import React from "react";
import PropTypes from "prop-types";

import { StyledLink } from "components/atoms";

const ListLink = ({ render, to, linkStyle, ...rest }) => (
  <li {...rest}>
    <StyledLink to={to} style={linkStyle}>
      {render}
    </StyledLink>
  </li>
);

ListLink.propTypes = {
  render: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
  linkStyle: PropTypes.object,
  style: PropTypes.object
};

export default ListLink;
