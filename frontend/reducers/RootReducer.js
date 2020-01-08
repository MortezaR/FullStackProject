import {combineReducers} from 'redux';

import SessionReducer from './SessionReducer'
import ErrorsReducer from './ErrorsReducer'
import EntitiesReducer from './EntitiesReducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  entities: EntitiesReducer,
  errors: ErrorsReducer
});

export default RootReducer