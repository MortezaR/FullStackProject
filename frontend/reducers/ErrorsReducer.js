import { combineReducers } from "redux";
import SessionErrorsReducer from './SessionErrorsReducer'
import PostErrorsReducer from './PostErrorsReducer'
import UserErrorsReducer from './UserErrorsReducer'

export default combineReducers({
  session: SessionErrorsReducer,
  post: PostErrorsReducer,
  user: UserErrorsReducer
});
