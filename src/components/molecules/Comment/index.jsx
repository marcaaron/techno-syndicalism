import React from "react";
import PropTypes from "prop-types";
import { dateToString } from "util/functions";
import { StyledLink, CommentBox } from "styles";

const Comment = ({ user, content, createdAt }) => (
  <CommentBox>
    <p>
      Name:{" "}
      <StyledLink to={`/users/${user.username}`}>{user.username}</StyledLink>
    </p>
    <p>Comment: {content}</p>
    <p>Replied On: {dateToString(createdAt)}</p>
  </CommentBox>
);

Comment.propTypes = {
  email: PropTypes.string,
  body: PropTypes.string
};

export default Comment;
