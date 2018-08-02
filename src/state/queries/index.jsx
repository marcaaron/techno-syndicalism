import gql from "graphql-tag";

export const GET_TEST_AUTH = gql`
  query getAuthUser {
    userInfo @client {
      isAuthenticated
      username
      imageUrl
      messages
      notifications
    }
  }
`;
