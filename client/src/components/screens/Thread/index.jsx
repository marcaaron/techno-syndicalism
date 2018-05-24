import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Post, Comment } from "components/molecules";

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
      <StyledContent>
        <Post {...post} />
        {comments.map(({ id, ...rest }) => <Comment {...rest} key={id} />)}
      </StyledContent>
    );
  }
}

const StyledContent = styled.div`
  max-width: 98vw;
  overflow: auto;
  background-color: white;
  width: 90%;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export default Thread;
