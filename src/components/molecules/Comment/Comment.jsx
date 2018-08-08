import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { dateToString } from "util/functions";
import { StyledLink, CommentBox } from "styles";
import { CommentReplyForm } from "components/organisms";
import { Comment } from "components/molecules";

const CommentDetails = ({
  post,
  user,
  content,
  createdAt,
  isReplying,
  handleClick,
  comments,
  comment_id
}) => (
  <CommentBox>
    <p>
      Name:{" "}
      <StyledLink to={`/users/${user.username}`}>{user.username}</StyledLink>
    </p>
    <p>Comment: {content}</p>
    <p>Replied On: {dateToString(createdAt)}</p>
    {comments &&
      comments.map(({ id, ...rest }) => (
        <Comment comment_id={id} post={post} {...rest} key={id} />
      ))}

    {!isReplying ? (
      <button onClick={handleClick}>Reply</button>
    ) : (
      <Fragment>
        <CommentReplyForm user={user} post={post} comment_id={comment_id} />
        <button onClick={handleClick}>Cancel</button>
      </Fragment>
    )}
  </CommentBox>
);

CommentDetails.propTypes = {
  email: PropTypes.string,
  body: PropTypes.string
};

export default CommentDetails;
