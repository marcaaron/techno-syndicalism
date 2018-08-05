import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { StyledLink } from "styles";
import { FETCH_GROUPS } from "state/queries";

class GroupList extends Component {
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

export default compose(
  graphql(FETCH_GROUPS, {
    props: ({ data }) => ({ ...data })
  })
)(GroupList);
