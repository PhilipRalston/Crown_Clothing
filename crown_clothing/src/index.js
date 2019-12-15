import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';


ReactDOM.render(
 // BrowserRouter is a component that we wrap around our application
 // Gives our application all the functionality of routing that the React Router DOM library provides
 <BrowserRouter>
  <App/>
 </BrowserRouter>,
 document.getElementById('root'));

