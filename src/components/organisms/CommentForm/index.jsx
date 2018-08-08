import { compose, graphql } from "react-apollo";
import { CREATE_COMMENT } from "state/mutations";
import CommentForm from "./CommentForm";

export default compose(
  graphql(CREATE_COMMENT, {
    name: "createComment"
  })
)(CommentForm);
