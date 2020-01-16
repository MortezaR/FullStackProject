import { RECEIVE_ERRORS } from "../actions/post";

const PostErrorsReducer = (prevState = [], action) => {
    switch (action.type) {
      case RECEIVE_ERRORS:
        return action.payload.errors;
      default:
        return prevState;
    }
}

// possible that there should be a way to reset errors back to blank
// if there was an error

// FIX!!

export default PostErrorsReducer;