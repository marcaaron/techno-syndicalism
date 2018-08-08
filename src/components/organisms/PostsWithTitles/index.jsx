import React from "react";
import { dateToString, switchPlural } from "util/functions";
import { StyledLink, StyledArticle, UserText, TitleText } from "styles";

const PostsWithTitles = ({ posts }) => (
  <ul>
    {posts.map(({ id, title, createdAt, commentCount, user: { username } }) => (
      <li key={id}>
        <StyledArticle>
          <StyledLink to={`/threads/${id}`}>
            <TitleText>{title}</TitleText>
          </StyledLink>
          <UserText>
            posted by:{" "}
            <StyledLink to={`/users/${username}`}>{username}</StyledLink> at{" "}
            {dateToString(createdAt)}
          </UserText>
          <p>
            {commentCount} comment{switchPlural(commentCount)}
          </p>
        </StyledArticle>
      </li>
    ))}
  </ul>
);
export default PostsWithTitles;
