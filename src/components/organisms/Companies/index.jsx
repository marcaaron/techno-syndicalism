import React, { Component } from "react";

class Companies extends Component {
  state = {
    isMounted: false,
    isError: false,
    page: 0,
    maxPages: 99,
    companies: []
  };

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const { page } = this.state;
    const url = `https://api-v2.themuse.com/companies?page=${page.toString()}`;

    try {
      let res = await fetch(url);
      let json = await res.json();

      this.setState({
        isMounted: true,
        maxPages: json.page_count,
        companies: json.results
      });
    } catch (error) {
      this.setState({ isMounted: true, isError: true });
      console.error("Fetch returned an error >>", error);
    }
  }

  updatePage = e => {
    const { value } = e.target;

    this.setState(
      {
        page: this.state.page + Number(value)
      },
      () => this.fetchData()
    );
  };

  render() {
    const { page, maxPages, isMounted, isError, companies } = this.state;

    if (!isMounted) {
      return <p>Loading the company list...</p>;
    } else if (isError) {
      return <p>Failed to load the company list.</p>;
    } else {
      return (
        <div>
          <p>
            Company List - Page {(page + 1).toString()}{" "}
            {page > 0 && (
              <button value={-1} onClick={this.updatePage}>
                Previous
              </button>
            )}
            {page < maxPages && (
              <button value={1} onClick={this.updatePage}>
                Next
              </button>
            )}
          </p>
          {companies.map(company => (
            <p key={company.id}>
              {company.description}
              <br />
              Locations:{" "}
              {company.locations.map((location, index) => (
                <small key={index}>{location.name}</small>
              ))}
            </p>
          ))}
        </div>
      );
    }
  }
}

export default Companies;
