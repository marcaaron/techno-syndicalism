import gql from "graphql-tag";

export const GET_CURRENT_USER = gql`
  query {
    clientInfo @client {
      id
      token
    }
  }
`;

export const GET_GROUPS = gql`
  query fetchGroups {
    allGroups {
      id
      name
      slug
    }
  }
`;

export const GET_POSTS = gql`
  query allPosts {
    allPosts {
      id
      title
      content
      createdAt
      user {
        id
        username
      }
      comments {
        id
        content
        createdAt
        user {
          username
        }
      }
    }
  }
`;

export const POST_BY_ID = gql`
  query postById($id: ID!) {
    postById(id: $id) {
      id
      title
      content
      createdAt
      user {
        id
        username
      }
      comments {
        id
        content
        createdAt
        user {
          id
          username
        }
      }
    }
  }
`;

export const GET_GROUP = gql`
  query groupBySlug($slug: String!) {
    groupBySlug(slug: $slug) {
      id
      name
      users {
        id
        username
      }
    }
  }
`;

export const GET_USER = gql`
  query getUser {
    user {
      id
      username
      imageUrl
    }
  }
`;

export const USER_BY_USERNAME = gql`
  query userByUserName($username: String!) {
    userByUsername(username: $username) {
      id
      username
      bio
      createdAt
      groups {
        id
        name
      }
    }
  }
`;
