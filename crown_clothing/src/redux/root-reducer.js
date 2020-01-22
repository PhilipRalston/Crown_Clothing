// Base reducer object that represents all of the state of our application
// Root reducer will end up being the actual code that combines all of our other states together (other reducers feed into this one)
// why would we do this? If we wrote all of the code related to all the states of our application in one file - really unwieldy - want to break the code up into individual sections
// Also going to write our user reducer - user reducer is where we are going to store the state of our current user - currently storing this inside our App component state

// Root reducer - overall reducer based on all the reducers it pulls in (slices of state merging into one big state - subcategorized into different areas - see diagram)

import { combineReducers } from 'redux';
// from redux library
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
 user: userReducer,
 cart: cartReducer
});

// Remember - our full state in Redux is just one big JSON object - the keys (e.g. user) that represent the individual slices of state (i.e. the actual reducers) are the actual individual reducers that we've wrote

// userReducer is just an object with a currentUser key and where the value of said key/property is set whenever a SET_CURRENT_USER action gets fired
// Then pull userReducer into combineReducers function - returns one JSON giant object with all the redux functionality that we want