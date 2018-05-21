import React, { Component, createContext } from "react";
import PropTypes from "prop-types";

// ------------------------------------
const metadata = {
  name: "Wobbly",
  tagline: "A workplace chat for all employees",
  logoUrl: "https://placekitten.com/60/60",
  test: "should render a string"
};

const userdata = {
  isAuthenticated: false,
  username: "",
  imageUrl: "https://placekitten.com/200/200",
  messages: 0,
  notifications: 0,
  company: {}
};

// Keeping our data store "flat" for now, since we'd need
// a special function to deep-copy objects that are nested
export const app = {
  ...userdata,
  ...metadata
};

// ------------------------------------

export const AppContext = createContext(app);

// ------------------------------------

export class AppProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  state = {
    ...app
  };

  componentWillMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  hydrateStateWithLocalStorage = () => {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  };

  toggleAuth = ({ callback, ...rest }) => {
    this.setState(
      {
        isAuthenticated: !this.state.isAuthenticated,
        username: rest.username
      },
      callback
    );
  };

  updateCounter = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: Number(this.state[name]) + Number(value)
    });
  };

  render() {
    const stateWithMethods = {
      ...this.state,
      toggleAuth: this.toggleAuth,
      updateCounter: this.updateCounter
    };

    return (
      <AppContext.Provider value={stateWithMethods}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
