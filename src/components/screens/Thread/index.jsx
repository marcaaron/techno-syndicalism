import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Page } from "../../common";
import { Post, Comment } from "../../features";

class Thread extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string
      })
    })
  };

  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.state = {
      postUrl: `https://jsonplaceholder.typicode.com/posts/${id}`,
      post: {},
      commentsUrl: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      comments: []
    };
  }

  async componentDidMount() {
    const { postUrl, commentsUrl } = this.state;
    {
      /* Get Post */
      const res = await fetch(postUrl);
      const json = await res.json();
      this.setState({ post: json });
    }

    {
      /* Get Comments */
      const res = await fetch(commentsUrl);
      const json = await res.json();
      this.setState({ comments: json });
    }
  }

  render() {
    const { post, comments } = this.state;

    return (
      <Page>
        <StyledContainer>
          <Post {...post} />
          {comments.map(({ id, ...rest }) => <Comment {...rest} key={id} />)}
        </StyledContainer>
      </Page>
    );
  }
}

const StyledContainer = styled.main`
  /* display */
  display: flex;
  flex-direction: column;

  /* box */
  width: 100%;

  /* text */
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export default Thread;
