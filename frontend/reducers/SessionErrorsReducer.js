import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";
const SessionErrorsReducer = (prevState = [], action) => {
    switch (action.type) {
      case RECEIVE_ERRORS:
        return action.payload.errors;
      case RECEIVE_CURRENT_USER:
        return [];
      default:
        return prevState;
    }
}

export default SessionErrorsReducer;