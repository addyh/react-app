import React, { Component } from 'react';
import $ from 'jquery';

// This is just the Search bar and Add New User button
class ContactsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.onClick = this.onClick.bind(this);

  }

  onClick(e) {
    e.preventDefault();

    // Show the NewUser table row, the form to create a new user,
    // when the "+ New User" button is clicked,
    // (NewUser.js component)
    $('.NewUser')[0].style.display = 'table-row';
  }

  // The ContactsHeader is its own table consisting of:
  //  - The "Contacts" header h1 element
  //  - The filter icon
  //  - The search bar
  //  - The Add New User button
  render() {
    return (
        <div className="ContactsHeader">
          <h1>Contacts</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <span className="glyphicon glyphicon-filter"></span>
                </td>
                <td>
                  <div className="search-input">
                    <input type="text" className="form-control" placeholder="Search by name" />
                  </div>
                </td>
                <td style={{textAlign: 'center'}}>
                  <button onClick={this.onClick} className="btn"><span className="glyphicon glyphicon-plus"></span> New User</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    );
  }
}

export default ContactsHeader;