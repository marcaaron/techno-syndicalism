import React, { Component } from "react";
import { graphql } from "react-apollo";
import { dateToString, switchPlural } from "util/functions";
import { USER_BY_USERNAME } from "state/queries";

class Users extends Component {
  render() {
    if (this.props.loading) return null;
    if (this.props.error) return null;
    console.log(this.props);

    const {
      userByUsername: { username, id, createdAt, bio, groups }
    } = this.props;
    console.log(username, id, createdAt, bio, groups);
    return (
      <div>
        <p>username: {username}</p>
        <p>id: {id}</p>
        <p>bio: {bio}</p>
        <p>account created on: {dateToString(createdAt)}</p>
        <p>
          belongs to workplace{switchPlural(groups.length)}:{" "}
          {groups && groups.map(({ id, name }) => <span key={id}>{name}</span>)}{" "}
        </p>
      </div>
    );
  }
}

export default graphql(USER_BY_USERNAME, {
  options: ({ match }) => ({
    variables: { username: match.params.username }
  }),
  props: ({ data }) => ({ ...data })
})(Users);
