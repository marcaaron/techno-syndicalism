import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { StyledLink } from "components/atoms";

const Post = ({ id, userId, title, body }) => (
  <StyledArticle>
    <StyledLink to={`/threads/${id}`}>
      <TitleText>Title: {title}</TitleText>
    </StyledLink>
    <StyledLink to={`/threads/${id}`}>
      <UserText>User: {userId}</UserText>
    </StyledLink>
    <StyledLink to={`/threads/${id}`}>
      <BodyText>Body: {body}</BodyText>
    </StyledLink>
  </StyledArticle>
);

Post.propTypes = {
  id: PropTypes.number,
  userId: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string
};

const StyledArticle = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  margin: 0;
`;

const TitleText = styled.h3`
  /* box */
  margin-bottom: 0;

  /* text */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserText = styled.p`
  margin-top: 0;
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 0.8em;
`;

const BodyText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Post;
