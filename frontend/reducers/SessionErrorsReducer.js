import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session";
const SessionErrorsReducer = (prevState = [], action) => {
    switch (action.type) {
      case RECEIVE_ERRORS:
        debugger
        return action.payload.errors;
      case RECEIVE_CURRENT_USER:
        return [];
      default:
        return prevState;
    }
}

export default SessionErrorsReducer;