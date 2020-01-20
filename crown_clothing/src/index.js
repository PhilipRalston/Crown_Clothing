import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import store from './redux/store.js'


ReactDOM.render(
 <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
 </Provider>
 ,
 document.getElementById('root'));

 // BrowserRouter is a component that we wrap around our application
 // Gives our application all the functionality of routing that the React Router DOM library provides
 // Provider - component class from React Redux - wrap around entire application because we want everything inside to have access to the store object (App State) that we get from React Redux
//  Once Provider is passed the store object it will be able to give the redux store context to the rest of the application - dispatch actions to the store/pull values from the store and into our components