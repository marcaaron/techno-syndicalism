import React from "react";
import { Companies, CompanySearch } from "components/organisms";
import { Container } from "styles";

const Locations = () => (
  <Container>
    <h2>Locations</h2>
    <CompanySearch />
    <Companies />
  </Container>
);

export default Locations;
