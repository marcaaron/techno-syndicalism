import React from "react";
import { GroupList, GroupSearch } from "components/organisms";
import { Container } from "styles";

const Groups = props => (
  <Container>
    <h2>Groups</h2>
    <button onClick={() => props.history.push("/create-group")}>
      Create A New Group
    </button>
    <GroupSearch />
    <GroupList />
  </Container>
);

export default Groups;
