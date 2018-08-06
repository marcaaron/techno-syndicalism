import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { FETCH_GROUPS } from "state/queries";
import GroupList from "./GroupList";

export default compose(
  graphql(FETCH_GROUPS, {
    props: ({ data }) => ({ ...data })
  })
)(GroupList);
