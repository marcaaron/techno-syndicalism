import gql from "graphql-tag";

export const UPDATE_CLIENT_INFO = gql`
  mutation updateClientInfo($token: String!, $id: ID!) {
    updateClientInfo(token: $token, id: $id) @client
  }
`;

export const SIGNUP_USER = gql`
  mutation signupUser($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      user {
        id
      }
      token
    }
  }
`;

export const CREATE_GROUP = gql`
  mutation createGroup($name: String!, $slug: String!, $userId: ID!) {
    createGroup(name: $name, slug: $slug, userId: $userId) {
      id
      name
      slug
      users {
        username
      }
      owner {
        username
      }
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

export const JOIN_GROUP = gql`
  mutation JoinGroup($userId: ID!, $groupId: ID!) {
    joinGroup(userId: $userId, groupId: $groupId) {
      id
      users {
        id
        username
      }
    }
  }
`;

export const LEAVE_GROUP = gql`
  mutation leaveGroup($userId: ID!, $groupId: ID!) {
    leaveGroup(userId: $userId, groupId: $groupId) {
      id
      users {
        id
        username
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost(
    $title: String!
    $content: String!
    $userId: ID!
    $groupId: ID!
  ) {
    createPost(
      title: $title
      content: $content
      userId: $userId
      groupId: $groupId
    ) {
      id
      title
      content
      user {
        username
      }
      group {
        name
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment(
    $postId: ID!
    $userId: ID!
    $content: String!
    $replyToCommentId: ID
  ) {
    createComment(
      userId: $userId
      postId: $postId
      content: $content
      replyToCommentId: $replyToCommentId
    ) {
      id
      content
      post {
        content
      }
      user {
        username
      }
      replyToComment {
        id
        content
      }
    }
  }
`;
