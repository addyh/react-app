import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, clearPayload } from '../actions/postActions';
import User from './User';
import NewUser from './NewUser';
import $ from 'jquery';

// UserList component:
//  - The table header
//  - Array of User table rows

class UserList extends Component {

  componentWillMount() {
    // Fetch the initial list of users from randomuser.me
    this.props.fetchUsers();
  }

  componentWillReceiveProps(nextProps) {

    console.log(nextProps);

    if (!$.isEmptyObject(nextProps.editUser)) {
      console.log('editing:');
      console.log(nextProps.editUser);
    }

    else if (!$.isEmptyObject(nextProps.remUser)) {
      console.log('removing');
      // Remove a user from the list
      this.props.users.splice(nextProps.remUser.id, 1);
    }

    else if (!$.isEmptyObject(nextProps.newUser)) {
      console.log('adding');
      // Add new user to beginning of list of users
      this.props.users.unshift(nextProps.newUser);
    }

  }

  componentDidUpdate(prevProps) {
    // Need to clear the payload every time a user is added, removed, or edited
    if (!$.isEmptyObject(prevProps.newUser) || !$.isEmptyObject(prevProps.remUser) || !$.isEmptyObject(prevProps.editUser)) {
      this.props.clearPayload();
    }
  }

  render() {
    // The combined array of all User components
    const userArray = this.props.users.map((user, key) => (
      <User key={key} id={key} data={user} />
    ));

    // The UserList table
    return (
      <div className="UserList">
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Username</td>
              <td>Basic Info</td>
              <td>Phone</td>
              <td>Date Created</td>
              <td style={{textAlign: 'center'}}>Edit</td>
            </tr>
          </thead>
          <tbody>
            <NewUser />
          </tbody>
          {userArray}
        </table>
      </div>
    );
  }
}

// Save state to redux props
const mapStateToProps = state => ({
  // same name ("users") as from combineReducers() in reducers/index.js
  users: state.users.items,
  newUser: state.users.item,
  remUser: state.users.remove,
  editUser: state.users.edit
});

// Connect to the reducer so we can fetch the user list and clear the payload
export default connect(mapStateToProps, { fetchUsers, clearPayload })(UserList);