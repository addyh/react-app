import React, { Component } from 'react';

// A div container around the entire app basically,
// but just the Contacts part, incase more is added around it
class ContactsArea extends Component {
  render() {
    return (
        <div className="ContactsArea">
          {this.props.children}
        </div>
    );
  }
}

export default ContactsArea;