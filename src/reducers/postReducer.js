import { FETCH_USERS, NEW_USER, DELETE_USER, EDIT_USER, CLEAR_PAYLOAD } from '../actions/types';

// Redux props we will use in UserList.js to communicate with react state
const initialState = {
  items: [],
  item: {},
  remove: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        // The user object will be stored in the items prop
        items: action.payload
      };
    case NEW_USER:
      return {
        ...state,
        // The new user will be stored in the item prop
        item: action.payload
      };
    case DELETE_USER:
      return {
        ...state,
        // The user id to delete will be stored in the remove prop
        remove: action.payload
      }
    case EDIT_USER:
      return {
        ...state,
        // The edited user's data will be stored in the edit prop
        edit: action.payload
      }
    case CLEAR_PAYLOAD:
      return {
        ...state,
        // Clearing out the following props
        item: action.payload,
        remove: action.payload,
        edit: action.payload
      }
    default:
      // Nothing is changed
      return state;
  }
}