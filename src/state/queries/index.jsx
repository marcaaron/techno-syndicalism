import gql from "graphql-tag";

export const GET_CURRENT_USER = gql`
  query {
    clientInfo @client {
      id
      token
    }
  }
`;

export const FETCH_GROUPS = gql`
  query fetchGroups {
    allGroups {
      id
      name
      slug
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
