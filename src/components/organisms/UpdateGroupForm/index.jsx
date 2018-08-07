import { compose, graphql } from "react-apollo";
import UpdateGroupForm from "./UpdateGroupForm";
import { CREATE_GROUP } from "state/mutations";

export default compose(graphql(CREATE_GROUP, { name: "createGroup" }))(
  UpdateGroupForm
);
