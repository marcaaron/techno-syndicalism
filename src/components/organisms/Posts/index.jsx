import React, { Component, Fragment } from "react";

import { Post } from "components/molecules";

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
      <Fragment>{posts.map(post => <Post {...post} key={post.id} />)}</Fragment>
    );
  }
}

export default Posts;
