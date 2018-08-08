import { compose, graphql } from "react-apollo";
import CreateGroupForm from "./CreateGroupForm";
import { CREATE_GROUP } from "state/mutations";

export default compose(graphql(CREATE_GROUP, { name: "createGroup" }))(
  CreateGroupForm
);
