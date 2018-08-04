import AuthRoute from "./AuthRoute";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

const GET_USER = gql`
  query getUser {
    user {
      username
      imageUrl
    }
  }
`;

export default compose(
  graphql(GET_USER, {
    props: ({ data }) => ({ ...data })
  })
)(AuthRoute);
