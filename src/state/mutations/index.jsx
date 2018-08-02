import gql from "graphql-tag";

export const TOGGLE_TEST_AUTH = gql`
  mutation toggleTestAuth(
    $isAuthenticated: Boolean!
    $username: String!
    $notifications: String!
    $messages: String!
    $imgeUrl: String!
  ) {
    toggleTestAuth(
      isAuthenticated: $isAuthenticated
      username: $username
      notifications: $notifications
      messages: $messages
      imageUrl: $imageUrl
    ) @client
  }
`;
