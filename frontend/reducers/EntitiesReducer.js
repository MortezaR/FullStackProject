import { combineReducers } from "redux";

import UsersReducer from "./UsersReducer";
import PostsReducer from "./PostsReducer"

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer
});

export default EntitiesReducer;