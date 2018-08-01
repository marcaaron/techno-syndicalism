import React from "react";
import PropTypes from "prop-types";
import { dateToString } from "../../../util/functions";

const Comment = ({ user, content, createdAt }) => (
  <article>
    <p>Name: {user.username}</p>
    <p>Comment: {content}</p>
    <p>Replied On: {dateToString(createdAt)}</p>
  </article>
);

Comment.propTypes = {
  email: PropTypes.string,
  body: PropTypes.string
};

export default Comment;
