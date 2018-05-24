import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { Post, Comment } from "components/molecules";

// ?? What's the deal with propTypes ?? Is this needed ?
//   static propTypes = {
//     match: PropTypes.shape({
//       params: PropTypes.shape({
//         id: PropTypes.string
//       })
//     })
//   };
//

const GET_POST = gql`
  query postById($id: Int!) {
    postById(id: $id) {
      userId
      id
      title
      body
      comments {
        postId
        id
        name
        email
        body
      }
    }
  }
`;

const Thread = ({
  match: {
    params: { id }
  }
}) => (
  <Query query={GET_POST} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return null;
      const { comments } = data.postById;
      const post = data.postById;
      return (
        <StyledContent>
          <Post {...post} />
          {comments.map(({ id, ...rest }) => <Comment {...rest} key={id} />)}
        </StyledContent>
      );
    }}
  </Query>
);

const StyledContent = styled.div`
  max-width: 98vw;
  overflow: auto;
  background-color: white;
  width: 90%;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export default Thread;
