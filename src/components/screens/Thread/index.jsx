import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { Post, Comment } from "components/molecules";
import { StyledContent } from "styles";

const GET_POST = gql`
  query postById($id: ID!) {
    Post(id: $id) {
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

const Thread = props => {
  if (props.loading) return null;
  if (props.error) {
    // Dev Only
    console.log(props.error);
    return null;
  }
  return (
    <StyledContent>
      <Post {...props.Post} />
      {props.Post.comments.map(({ id, ...rest }) => (
        <Comment {...rest} key={id} />
      ))}
    </StyledContent>
  );
};

Thread.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default graphql(GET_POST, {
  options: ({ match }) => ({
    variables: { id: match.params.id }
  }),
  props: ({ data }) => ({ ...data })
})(Thread);
