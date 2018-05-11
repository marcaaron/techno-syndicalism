import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { StyledLink } from "../../common";

class Post extends Component {
  static propTypes = {
    id: PropTypes.number,
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
  };

  render() {
    const { id, userId, title, body } = this.props;

    return (
      <StyledLink to={`/threads/${id}`}>
        <StyledContainer>
          <TitleText>Title: {title}</TitleText>
          <UserText>User: {userId}</UserText>
          <BodyText>Body: {body}</BodyText>
        </StyledContainer>
      </StyledLink>
    );
  }
}

const StyledContainer = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  margin: 0;
`;

const TitleText = styled.h3`
  /* box */
  margin-bottom: 0;
  width: 100%;

  /* text */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserText = styled.p`
  margin-top: 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.8em;
`;

const BodyText = styled.p`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Post;
