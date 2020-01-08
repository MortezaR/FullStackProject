import { combineReducers } from "redux";

import UsersReducer from "./UsersReducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
});

export default EntitiesReducer;