import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
  // same name ("users") as from Users.js
  users: postReducer
});