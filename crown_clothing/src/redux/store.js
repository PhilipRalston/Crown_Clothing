import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer.js';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))
// instantiate a new store object using the createStore method
// ...middlewares will spread in all of the values in the middlewares array into the applyMiddleware function as arguments
// logger is a middleware that logs out the action that got fired
// middleware intercepts actions that are fired (when the user does something in our app) before passing them onto a reducer.

export default store;