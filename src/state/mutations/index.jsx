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

export const SIGNUP_USER = gql`
  mutation signupUser($username: String!, $email: String!, $password: String!) {
    createUser(
      username: $username
      authProvider: { email: { email: $email, password: $password } }
    ) {
      id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
      user {
        username
      }
    }
  }
`;
