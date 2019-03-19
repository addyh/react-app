import { FETCH_USERS, NEW_USER, DELETE_USER, EDIT_USER, CLEAR_PAYLOAD} from './types';
import {formatName} from './format';

// Fetch the users object from randomuser.me
// and dispatch the payload
export const fetchUsers = () => dispatch => {
  fetch('https://randomuser.me/api/?page=1&results=20&seed=abc')
  .then(res => res.json())
  .then(users => {

    // Take out unnecessary elements from randomuser fetched object
    const data = users.results.map((data) => {
      return {
        thumbnail: data.picture.thumbnail,
        username: data.login.username,
        name: formatName(data.name.first) + ' ' + formatName(data.name.last),
        email: data.email,
        phone: data.phone,
        date: data.registered.date
      };
    });

    dispatch({
    type: FETCH_USERS,
    payload: data
    });
  });
};

// createUser action
export const createUser = (data) => dispatch => {
  dispatch({
    type: NEW_USER,
    payload: data
  });
};

// Use an empty object to clear the payloads
export const clearPayload = (data) => dispatch => {
  dispatch({
    type: CLEAR_PAYLOAD,
    payload: {}
  });
};

// deleteUser action
export const deleteUser = (data) => dispatch => {
  dispatch({
    type: DELETE_USER,
    payload: data
  });
};

// editUser action
export const editUser = (data) => dispatch => {
  dispatch({
    type: EDIT_USER,
    payload: data
  });
};