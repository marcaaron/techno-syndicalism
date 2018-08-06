import React, { Component, Fragment } from "react";
import { hasUser } from "util/functions";

class Group extends Component {
  handleJoin = () => {
    const {
      data: { Group },
      connectUserToGroup,
      user
    } = this.props;
    connectUserToGroup({
      variables: {
        groupsGroupId: Group.id,
        usersUserId: user.id
      },
      refetchQueries: ["groupBySlug"]
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  handleLeave = () => {
    const {
      data: { Group },
      disconnectUserFromGroup,
      user
    } = this.props;
    disconnectUserFromGroup({
      variables: {
        groupsGroupId: Group.id,
        usersUserId: user.id
      },
      refetchQueries: ["groupBySlug"]
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  renderJoinButtons = () => {
    if (this.props.user) {
      const {
        data: { groupBySlug },
        user
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
    console.log(this.props);
    const { loading, error, data } = this.props;
    if (loading || data.loading) return null;
    const { groupBySlug } = this.props.data;
    console.log(groupBySlug);
    return (
      <div>
        <p>Group Name: {groupBySlug.name}</p>
        {this.renderJoinButtons()}
      </div>
    );
  }
}

export default Group;
