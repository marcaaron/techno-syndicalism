import { compose, graphql } from "react-apollo";
import CreatePostForm from "./CreatePostForm";
import { CREATE_POST } from "state/mutations";

export default compose(graphql(CREATE_POST, { name: "createPost" }))(
  CreatePostForm
);
