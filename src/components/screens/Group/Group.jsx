import React, { Component, Fragment } from "react";
import { hasUser } from "util/functions";
import { User } from "components/molecules";

class Group extends Component {
  handleJoin = () => {
    const {
      getGroup: { groupBySlug },
      joinGroup,
      getUser: { user }
    } = this.props;
    joinGroup({
      variables: {
        groupId: groupBySlug.id,
        userId: user.id
      },
      optimisticResponse: {
        __typename: "Mutation",
        joinGroup: {
          __typename: "Group",
          id: groupBySlug.id,
          users: [
            {
              id: user.id,
              username: user.username,
              __typename: "User"
            }
          ]
        }
      },
      refetchQueries: ["groupBySlug"]
    })
      .then(data => {})
      .catch(err => {});
  };

  handleLeave = () => {
    const {
      getGroup: { groupBySlug },
      leaveGroup,
      getUser: { user }
    } = this.props;
    leaveGroup({
      variables: {
        groupId: groupBySlug.id,
        userId: user.id
      },
      optimisticResponse: {
        __typename: "Mutation",
        leaveGroup: {
          __typename: "Group",
          id: groupBySlug.id,
          users: []
        }
      },
      refetchQueries: ["groupBySlug"]
    })
      .then(data => {})
      .catch(err => {});
  };

  renderJoinButtons = () => {
    const {
      getUser: { user }
    } = this.props;
    if (user) {
      const {
        getGroup: { groupBySlug }
      } = this.props;
      return (
        <Fragment>
          {!hasUser(groupBySlug.users, user.id) ? (
            <button onClick={this.handleJoin}>Join</button>
          ) : (
            <button onClick={this.handleLeave}>Leave</button>
          )}
        </Fragment>
      );
    } else {
      return null;
    }
  };

  render() {
    const { getUser, getGroup } = this.props;
    if (getUser.loading || getGroup.loading) return null;
    const { groupBySlug } = getGroup;
    return (
      <div>
        <p>Group Name: {groupBySlug.name}</p>
        <strong>Users: </strong>
        <ul>{groupBySlug.users.map(user => <User user={user} />)}</ul>
        {this.renderJoinButtons()}
      </div>
    );
  }
}

export default Group;
