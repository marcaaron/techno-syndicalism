import React from "react";
import PropTypes from "prop-types";

const Comment = ({ email, body }) => (
  <article>
    <p>Name: {email}</p>
    <p>Body: {body}</p>
  </article>
);

Comment.propTypes = {
  email: PropTypes.string,
  body: PropTypes.string
};

export default Comment;
