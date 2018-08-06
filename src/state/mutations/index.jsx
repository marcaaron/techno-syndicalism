import gql from "graphql-tag";

export const UPDATE_CLIENT_INFO = gql`
  mutation updateClientInfo($token: String!, $id: ID!) {
    updateClientInfo(token: $token, id: $id) @client
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

export const CREATE_GROUP = gql`
  mutation createGroup($name: String!, $slug: String!) {
    createGroup(name: $name, slug: $slug) {
      id
      name
      slug
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
        bio
        imageUrl
      }
    }
  }
`;

export const CONNECT_USER_TO_GROUP = gql`
  mutation connectUserToGroup($usersUserId: ID!, $groupsGroupId: ID!) {
    addToGroupOnUser(usersUserId: $usersUserId, groupsGroupId: $groupsGroupId) {
      groupsGroup {
        updatedAt
      }
      usersUser {
        updatedAt
      }
    }
  }
`;

export const DISCONNECT_USER_FROM_GROUP = gql`
  mutation disconnectUserFromGroup($usersUserId: ID!, $groupsGroupId: ID!) {
    removeFromGroupOnUser(
      usersUserId: $usersUserId
      groupsGroupId: $groupsGroupId
    ) {
      groupsGroup {
        updatedAt
      }
      usersUser {
        updatedAt
      }
    }
  }
`;
