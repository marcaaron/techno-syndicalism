import AuthRoute from "./AuthRoute";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { GET_USER } from "state/queries";

export default compose(
  graphql(GET_USER, {
    props: ({ data }) => ({ ...data })
  })
)(AuthRoute);
