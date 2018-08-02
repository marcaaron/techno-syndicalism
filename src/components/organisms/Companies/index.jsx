import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

class Companies extends Component {
  render() {
    const { loading, error, allGroups } = this.props;
    if (loading) return <p>Loading the company list...</p>;
    if (error) return <p>Failed to load the company list.</p>;
    return (
      <div>
        {allGroups.map(group => (
          <p key={group.id}>
            {group.name}
            <br />
          </p>
        ))}
      </div>
    );
  }
}

const FETCH_GROUPS = gql`
  query fetchGroups {
    allGroups {
      id
      name
    }
  }
`;

export default compose(
  graphql(FETCH_GROUPS, {
    props: ({ data }) => ({ ...data })
  })
)(Companies);
