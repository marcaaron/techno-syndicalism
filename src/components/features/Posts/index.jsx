import React, { Component } from "react";
import styled from "styled-components";

import { Post } from "../../features";

class Posts extends Component {
  state = {
    url: "https://jsonplaceholder.typicode.com/posts",
    posts: []
  };

  async componentDidMount() {
    const { url } = this.state;
    const res = await fetch(url);
    const json = await res.json();
    this.setState({ posts: json });
  }

  render() {
    const { posts } = this.state;

    return (
      <StyledContainer>
        {posts.map(post => <Post {...post} key={post.id} />)}
      </StyledContainer>
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

export default Posts;
