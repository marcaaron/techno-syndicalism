import React, { Component } from "react";
import { StyledLink } from "styles";

/**
| allGroups: description
|   field1
|   field2
|
*/

export default class GroupList extends Component {
  renderGroups = groups => {
    if (groups.length > 0) {
      return groups.map(group => (
        <p key={group.id}>
          <StyledLink to={`/groups/${group.slug}`}>{group.name}</StyledLink>
          <br />
        </p>
      ));
    } else {
      return (
        <div>
          <p>No Groups Found :(</p>
          <StyledLink to="/groups">Show All Groups</StyledLink>
        </div>
      );
    }
  };
  render() {
    const { renderGroups } = this;
    const {
      loading,
      error,
      allGroups,
      searchGroupsByName,
      match: { path }
    } = this.props;
    if (loading || searchGroupsByName.loading) return <p>Loading groups...</p>;
    if (error || searchGroupsByName.error) return <p>Failed to load groups.</p>;
    return (
      <div>
        {path === "/groups/search/:query_string"
          ? renderGroups(searchGroupsByName.searchGroupsByName)
          : renderGroups(allGroups)}
      </div>
    );
  }
}
