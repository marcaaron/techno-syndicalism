import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Comment = ({ email, body }) => (
  <StyledArticle>
    <p>Name: {email}</p>
    <p>Body: {body}</p>
  </StyledArticle>
);

Comment.propTypes = {
  email: PropTypes.string,
  body: PropTypes.string
};

const StyledArticle = styled.article``;

export default Comment;
