import { ACTIONS } from "state/types";

export const initialState = {
  isAuthenticated: false,
  username: "",
  imageUrl: "https://placekitten.com/200/200",
  messages: 0,
  notifications: 0,
  companies: []
};

function user(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_TEST_AUTH:
      return {
        ...state,
        username: action.username || state.username,
        isAuthenticated: !state.isAuthenticated
      };

    case ACTIONS.UPDATE_TEST_COUNTER:
      return {
        ...state,
        [action.name]: Number(state[action.name]) + Number(action.value)
      };

    default:
      return state;
  }
}

export default user;
