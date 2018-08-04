import NavBar from "./NavBar";
import { graphql, compose } from "react-apollo";
import { GET_TEST_AUTH } from "state/queries";
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
)(NavBar);
