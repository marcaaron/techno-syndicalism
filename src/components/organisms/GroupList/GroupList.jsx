import React, { Component } from "react";
import { StyledLink } from "styles";

/**
| allGroups: description
|   field1
|   field2
|
*/

export default class GroupList extends Component {
  render() {
    const { loading, error, allGroups } = this.props;
    if (loading) return <p>Loading the company list...</p>;
    if (error) return <p>Failed to load the company list.</p>;
    return (
      <div>
        {allGroups.map(group => (
          <p key={group.id}>
            <StyledLink to={`/groups/${group.slug}`}>{group.name}</StyledLink>
            <br />
          </p>
        ))}
      </div>
    );
  }
}
