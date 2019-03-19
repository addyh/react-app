import React, { Component } from 'react'
import { connect } from 'react-redux';
import { formatDate, formatName, optional } from '../actions/format';
import { deleteUser, editUser } from '../actions/postActions';
import $ from 'jquery';

// The User Component, a table row consisting of:
//  - Thumbnail
//  - Username
//  - Name, E-mail
//  - Phone number
//  - Date Created
//  - Edit and Delete user buttons
// And also the EditUser table row
//  - (hidden by default, until the Edit button is clicked)

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: this.props.data.thumbnail,
      username: this.props.data.username,
      name: this.props.data.name,
      email: this.props.data.email,
      phone: this.props.data.phone,
      date: this.props.data.date
    }

    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.onChange = this.onChange.bind(this);
    this.saveUser = this.saveUser.bind(this);


  }

  // Update the state and props when EditUser inputs are changed
  onChange(e) {
    this.props.data[e.target.name] = e.target.value;
    this.setState({[e.target.name]: e.target.value});
  }

  // Edit button was pressed on a user
  editUser(e) {
    e.preventDefault();

    const edit = {id: this.props.id};

    // Hide the User row
    $('.User-' + this.props.id)[0].style.display = 'none';

    // Show the EditUser row
    $('.EditUser-' + this.props.id)[0].style.display = 'table-row';

    // Update the EditUser inputs with the user data
    $('.EditUser-' + this.props.id + ' input.username')[0].value = this.props.data.username;
    $('.EditUser-' + this.props.id + ' input.name')[0].value = this.props.data.name;
    $('.EditUser-' + this.props.id + ' input.email')[0].value = this.props.data.email;
    $('.EditUser-' + this.props.id + ' input.phone')[0].value = this.props.data.phone;
  }

  // Save (floppy disk) button was pressed
  saveUser(e) {
    e.preventDefault();

    // Get the user data from the EditUser inputs
    let user = {
      thumbnail: this.props.data.thumbnail,
      username: $('.EditUser-' + this.props.id + ' input.username')[0].value,
      name: $('.EditUser-' + this.props.id + ' input.name')[0].value,
      email: $('.EditUser-' + this.props.id + ' input.email')[0].value,
      phone: $('.EditUser-' + this.props.id + ' input.phone')[0].value,
      date: this.props.data.date
    };

    // Call the editUser action reducer
    this.props.editUser(user);

    // Show the User row again
    $('.User-' + this.props.id)[0].style.display = 'table-row';

    // Hide the EditUser row again
    $('.EditUser-' + this.props.id)[0].style.display = 'none';

  }

  // Delete (trash can) button was pressed
  deleteUser(e) {
    e.preventDefault();

    // Get the id of which user we are removing
    const remove = {id: this.props.id};

    // Call the deleteUser action reducer
    this.props.deleteUser(remove);


  }

  // A User table row with the user data, and edit/delete buttons
  //  - Shown by default
  //  - Hidden when Edit button is pressed
  // And an EditUser table row with the EditUser input boxes and save button
  //  - Hidden by default, until Edit button is clicked
  render() {
    return (
      <tbody>
        <tr className={"User User-"+this.props.id}>
          <td><img alt="" className="thumbnail" src={optional(this.props.data.thumbnail)} /></td>
          <td><span className="basic-info-username">{optional(this.props.data.username)}</span></td>
          <td>
          <span className="basic-info-name">{formatName(this.props.data.name)}</span><br />
            <span className="basic-info-email">{this.props.data.email}</span>
          </td>
          <td>{optional(this.props.data.phone)}</td>
          <td>{formatDate(optional(this.props.data.date))}</td>
          <td style={{textAlign: 'center'}}>
            <button onClick={this.editUser} className="btn glyphicon glyphicon-pencil"></button>
            <button onClick={this.deleteUser} className="btn glyphicon glyphicon-trash"></button>
          </td>
        </tr>
        <tr className={"User EditUser EditUser-"+this.props.id}>
        <td><img alt="" className="thumbnail" src={optional(this.state.thumbnail)} /></td>
          <td><input className="username" type="text" name="username" onChange={this.onChange} placeholder="Username" /></td>
          <td>
            <input className="name" type="text" name="name" onChange={this.onChange} placeholder="Name" /><br />
            <input className="email" type="text" name="email" onChange={this.onChange} placeholder="E-mail" />
          </td>
          <td><input className="phone" type="text" name="phone" onChange={this.onChange} placeholder="Phone #" /></td>
          <td>{formatDate(optional(this.props.data.date))}</td>
          <td style={{textAlign:'center'}}>
            <button onClick={this.saveUser} className="btn btn-success glyphicon glyphicon-floppy-disk"></button>
          </td>
        </tr>
      </tbody>
    )
  }
}

// Connect to the reducer so we can edit and delete users
export default connect(null, { deleteUser, editUser })(User);