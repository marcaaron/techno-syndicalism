import React, { Component } from "react";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import { dateToString } from "../../../util/functions";

class Users extends Component {
  render() {
    if (this.props.loading) return null;
    if (this.props.error) return null;
    const {
      User: { username, id, createdAt, bio }
    } = this.props;
    return (
      <div>
        <p>username: {username}</p>
        <p>id: {id}</p>
        <p>bio: {bio}</p>
        <p>account created on: {dateToString(createdAt)}</p>
      </div>
    );
  }
}

const USER_BY_ID = gql`
  query userById($username: String!) {
    User(username: $username) {
      id
      username
      bio
      createdAt
    }
  }
`;

export default graphql(USER_BY_ID, {
  options: ({ match }) => ({
    variables: { username: match.params.username }
  }),
  props: ({ data }) => ({ ...data })
})(Users);
