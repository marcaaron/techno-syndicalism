import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { StyledLink } from "components/atoms";

const ListLink = ({ render, ...rest }) => (
  <Container>
    <StyledLink {...rest}>{render}</StyledLink>
  </Container>
);

const Container = styled.div``;

ListLink.propTypes = {
  render: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired
};

export default ListLink;
