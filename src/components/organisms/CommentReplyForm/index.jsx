import { compose, graphql } from "react-apollo";
import { CREATE_COMMENT_REPLY } from "state/mutations";
import CommentReplyForm from "./CommentReplyForm";

export default compose(
  graphql(CREATE_COMMENT_REPLY, {
    name: "createCommentReply"
  })
)(CommentReplyForm);
