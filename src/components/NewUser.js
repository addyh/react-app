import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/postActions';
import { formatDate } from '../actions/format'
import $ from 'jquery';

// NewUser component: a hidden table row that goes at the top of the list of users, that is shown when "+ New User" button is clicked
class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: '',
      username: '',
      name: '',
      email: '',
      phone: '',
      date: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);

  }

  // Allows the inputs to be edited and update the state accordingly
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  // NewUser form is being submitted
  onClick(e) {
    e.preventDefault();

    const newUser = {
      thumbnail: this.state.thumbnail,
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      date: new Date() // Since this is a new user, use the current date
    }

    // Hide the NewUser table row until they want to add a new user again
    $('.NewUser')[0].style.display = 'none';

    // Call action to create new user using the state of the form inputs
    this.props.createUser(newUser);

  }
  
  // Render the NewUser table row (hidden by default):
  //  - A bunch of inputs for creating a new user
  //  - And a green Add User button when ready to add the user
  render() {
    return (
        <tr className="NewUser">
          <td><img alt="" /></td>
          <td><input className="username" type="text" name="username" onChange={this.onChange} value={this.state.username} placeholder="Username" /></td>
          <td>
            <input className="name" type="text" name="name" onChange={this.onChange} value={this.state.name} placeholder="Name" /><br />
            <input className="email" type="text" name="email" onChange={this.onChange} value={this.state.email} placeholder="E-mail" />
          </td>
          <td><input className="phone" type="text" name="phone" onChange={this.onChange} value={this.state.phone} placeholder="Phone #" /></td>
          <td>{formatDate()}</td>
          <td style={{textAlign:'center'}}><button className="btn btn-success" type="button" onClick={this.onClick}>Add User</button></td>
        </tr>
    )
  }
}

// Connect to the reducer so we can create a new user with createUser()
export default connect(null, { createUser })(NewUser);