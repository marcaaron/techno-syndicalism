import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

class Comment extends Component {
  static propTypes = {
    email: PropTypes.string,
    body: PropTypes.string
  };

  render() {
    const { email, body } = this.props;

    return (
      <StyledContainer>
        <p>Name: {email}</p>
        <p>Body: {body}</p>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.article`
  width: 100%;
`;

export default Comment;
