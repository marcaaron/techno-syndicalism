import React, { Component, Fragment } from "react";
import { hasUser } from "util/functions";

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
      refetchQueries: ["groupBySlug"]
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
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
      refetchQueries: ["groupBySlug"]
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
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
    const { user } = getUser;
    const { groupBySlug } = getGroup;
    return (
      <div>
        <p>Group Name: {groupBySlug.name}</p>
        {this.renderJoinButtons()}
      </div>
    );
  }
}

export default Group;
