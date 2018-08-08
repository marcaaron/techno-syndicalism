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

export const POST_BY_ID = gql`
  fragment CommentDetails on Comment {
    id
    content
    createdAt
    user {
      id
      username
    }
  }

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
        ...CommentDetails
        comments {
          ...CommentDetails
          comments {
            ...CommentDetails
            comments {
              ...CommentDetails
            }
          }
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
      posts {
        id
        title
        createdAt
        user {
          username
        }
        comments {
          id
        }
        commentCount
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
