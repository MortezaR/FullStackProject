import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const UsersReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  let nextState = {};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, prevState, {
        [action.payload.user.id]: action.payload.user
      });
      return nextState;
    case RECEIVE_USER:
      nextState = Object.assign({}, prevState, {
        [action.payload.user.id]: action.payload.user
      });
      return nextState;
    default:
      return prevState;
  }
};

export default UsersReducer;