import Group from "./Group";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { GET_GROUP, GET_USER } from "state/queries";
import {
  CONNECT_USER_TO_GROUP,
  DISCONNECT_USER_FROM_GROUP
} from "state/mutations";

export default compose(
  graphql(GET_GROUP, {
    options: ({ match }) => ({
      variables: { slug: match.params.slug }
    })
  }),
  graphql(GET_USER, {
    props: ({ data }) => ({ ...data })
  }),
  graphql(CONNECT_USER_TO_GROUP, { name: "connectUserToGroup" }),
  graphql(DISCONNECT_USER_FROM_GROUP, { name: "disconnectUserFromGroup" })
)(Group);
