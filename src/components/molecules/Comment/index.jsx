import React, { Component } from "react";
import Comment from "./Comment";

export default class CommentMethods extends Component {
  state = {
    isReplying: false
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ isReplying: !this.state.isReplying });
  };

  render() {
    const { isReplying } = this.state;
    const { handleClick, props } = this;
    return (
      <Comment {...props} isReplying={isReplying} handleClick={handleClick} />
    );
  }
}
