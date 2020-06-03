import { combineReducers } from "redux";

import UsersReducer from "./UsersReducer";
import PostsReducer from "./PostsReducer"
import FriendsReducer from './FriendsReducer'

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  friends: FriendsReducer
});

export default EntitiesReducer;