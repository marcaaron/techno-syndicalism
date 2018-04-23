import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      position: "Welcome"
    };

    this.handleClickBlank = this.handleClickBlank.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleClickMyUnions = this.handleClickMyUnions.bind(this);
    this.handleClickCreate = this.handleClickCreate.bind(this);
  }

  handleClickBlank() {
    this.setState({ position: "Welcome" });
  }

  handleClickSearch() {
    this.setState({ position: "Search" });
  }

  handleClickMyUnions() {
    this.setState({ position: "My Unions" });
  }

  handleClickCreate() {
    this.setState({ position: "Create" });
  }

  getName() {
    if (this.state.name != "") return ", " + this.state.name;
    else return "";
  }

  render() {
    switch (this.state.position) {
      case "Welcome":
        return (
          <div>
            <p>Welcome to Techno-Syndicalism {this.getName}</p>
            <button onClick={this.handleClickMyUnions}>My Unions</button>
            <button onClick={this.handleClickSearch}>Search Unions</button>
            <button onClick={this.handleClickCreate}>Create new Union</button>
          </div>
        );
        break;
      case "My Unions":
        return (
          <div>
            <button onClick={this.handleClickBlank}>Back</button>
            <MyUnions />
          </div>
        );
        break;
      case "Search":
        return (
          <div>
            <button onClick={this.handleClickBlank}>Back</button>
            <Search />
          </div>
        );
        break;
      case "Create":
        return (
          <div>
            <button onClick={this.handleClickBlank}>Back</button>

            <input type="text" placeholder="Union Name" />
            <input type="text" placeholder="Description" />
            <input type="submit" value="create" />
          </div>
        );
        break;
    }
  }
}

class MyUnions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { union: "all" };

    this.handleClickDeliveroo = this.handleClickDeliveroo.bind(this);
    this.handleClickBurger = this.handleClickBurger.bind(this);
  }

  handleClickDeliveroo() {
    this.setState({ union: "Deliveroo" });
  }

  handleClickBurger() {
    this.setState({ union: "Burger" });
  }

  render() {
    switch (this.state.union) {
      case "all":
        return (
          <div>
            <p>My Unions</p>
            <button onClick={this.handleClickDeliveroo}>
              <p>Deliveroo Newcastle</p>
            </button>
            <button onClick={this.handleClickBurger}>
              <p>Burger King Northumberland Street</p>
            </button>
          </div>
        );
        break;
      case "Deliveroo":
        return <Union name="Deliveroo Newcastle" />;
        break;
      case "Burger":
        return <Union name="Burger King Northumberland Street" />;
    }
  }
}

class Union extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button>
          <p>Members</p>
        </button>
        <button>
          <p>Chat</p>
        </button>
        <button>
          <p>Funds</p>
        </button>
        <button>
          <p>Union Info</p>
        </button>
      </div>
    );
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: false };

    this.handleClickSearch = this.handleClickSearch.bind(this);
  }

  handleClickSearch() {
    this.setState({ results: true });
  }

  render() {
    if (this.state.results) {
      return (
        <div>
          <p>Results:</p>
          <button>
            <p>Greggs Byker</p>
          </button>
          <button>
            <p>Topman Eldon Square</p>
          </button>
          <button>
            <p>Deliveroo Newcastle</p>
          </button>
          <button>
            <p>Burger King Northumberland Street</p>
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <input type="text" placeholder="Workplace" />
          <button onClick={this.handleClickSearch}>Search</button>
        </div>
      );
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: false,
      name: "Sam"
    };

    this.handleClickLogIn = this.handleClickLogIn.bind(this);
    this.handleClickLogout = this.handleClickLogout.bind(this);
  }

  handleClickLogIn() {
    this.setState({ loggedin: true });
  }

  handleClickLogout() {
    this.setState({ loggedin: false });
  }

  render() {
    if (this.state.loggedin) {
      return (
        <div>
          <Welcome name={this.state.name} />
          <p onClick={this.handleClickLogout} class="w3-text-red w3-card">
            Log Out
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p onClick={this.handleClickLogIn}>Log in</p>
          <p>Sign up</p>
        </div>
      );
    }
  }
}

export default App;
