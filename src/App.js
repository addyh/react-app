import React, { Component } from 'react';
import { Provider } from 'react-redux';

import UserList from './components/UserList';
import ContactsArea from './components/ContactsArea';
import ContactsHeader from './components/ContactsHeader';

// redux store for Provider
import store from './store';

// App consists of: 
//  - ContactsArea which is a div container
//     - ContactsHeader containing:
//        - Search bar
//        - Add New User button
//     - UserList, the list of users and their functionality

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <ContactsArea>
            
            <ContactsHeader />
            <UserList />
            
          </ContactsArea>

        </div>
      </Provider>
    );
  }
}

export default App;