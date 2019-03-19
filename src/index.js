import React from 'react';
import { render } from 'react-dom';
import App from './App';
import $ from 'jquery';

// Css styligs for every component in here
import './style.css';

// Change the viewport to the app width
$(function() {
  if ($('meta[name=viewport]')) {
    $('meta[name=viewport]').remove();
  }

  let m = document.createElement('meta'); 
  m.name = 'viewport'; 
  m.content = 'width=830'; 
  document.head.appendChild(m);

});

// Render the application using the App component
render(<App />, document.getElementById('root'));
