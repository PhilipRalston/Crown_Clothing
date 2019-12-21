import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';


ReactDOM.render(
 // BrowserRouter is a component that we wrap around our application
 // Gives our application all the functionality of routing that the React Router DOM library provides
 // Provider - component from React Redux - wrap around entire application because we want everything inside to have access to the store object that we get from Redux
 <Provider>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
 </Provider>
 ,
 document.getElementById('root'));

