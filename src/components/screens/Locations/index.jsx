import React, { Component } from "react";
import styled from "styled-components";

import { Companies } from "components/organisms";
import { CompanySearch } from "components/organisms";

const Locations = () => (
  <Container>
    <h2>Locations</h2>
    <CompanySearch />
    <Companies />
  </Container>
);

export default Locations;
