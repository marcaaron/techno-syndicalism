import React, { Component } from "react";
import styled from "styled-components";

import { Input, Label } from "components/atoms";
import { Companies } from "components/organisms";

import { capitalize } from "util/functions";

class Locations extends Component {
  state = {
    value: "",
    isLoading: false,
    receivedErrorCode: false,
    company: {}
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchCompany();
  };

  async fetchCompany() {
    this.setState({
      isLoading: true,
      // Clears the error status if previously set
      receivedErrorCode: false
    });

    const { value } = this.state;

    try {
      // Fetches the company id (if found)
      {
        let url = `https://api-v2.themuse.com/jobs?company=${capitalize(
          value
        )}&page=0`;
        let res = await fetch(url);
        let json = await res.json();
        var { id } = await json.results[0].company;
      }

      // Fetches the company info
      {
        let url = await `https://api-v2.themuse.com/companies/${id}`;
        let res = await fetch(url);
        var result = await res.json();
      }

      this.setState({ company: result, isLoading: false });
    } catch (error) {
      console.error("Fetch returned an error:", error);
      this.setState({ receivedErrorCode: true, isLoading: false });
    }
  }

  renderCompany = () => {
    const { isLoading, receivedErrorCode, company } = this.state;

    // If not loading, if no error, and if the company object is empty...
    if (
      !isLoading &&
      !receivedErrorCode &&
      Object.keys(company).length === 0 &&
      company.constructor === Object
    ) {
      return <p>No company selected</p>;

      // If the loading status is set to true...
    } else if (isLoading) {
      return <p>Loading...</p>;

      // If we received an error code...
    } else if (receivedErrorCode) {
      return <p>No results</p>;

      // A company exists in state...
    } else {
      return (
        <div>
          <h3>{company.name}</h3>
          <p>
            <small>{company.description}</small>
          </p>
        </div>
      );
    }
  };

  render() {
    const passMethods = {
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    };

    return (
      <Container>
        <h2>Locations</h2>
        <CompanySearch {...passMethods} />
        {this.renderCompany()}
        <Companies />
      </Container>
    );
  }
}

const CompanySearch = ({ handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Search Companies<br />
        <Input type="text" name="search" onChange={handleChange} />
        <Input type="submit" name="search" />
      </Label>
    </form>
  );
};

const Container = styled.main`
  /* display */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Locations;
