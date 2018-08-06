import Group from "./Group";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { GET_GROUP, GET_USER } from "state/queries";
import { JOIN_GROUP, LEAVE_GROUP } from "state/mutations";

export default compose(
  graphql(GET_GROUP, {
    name: "getGroup",
    options: ({ match }) => ({
      variables: { slug: match.params.slug }
    })
  }),
  graphql(GET_USER, { name: "getUser" }),
  graphql(JOIN_GROUP, { name: "joinGroup" }),
  graphql(LEAVE_GROUP, { name: "leaveGroup" })
)(Group);
