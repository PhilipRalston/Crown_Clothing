import { UserActionTypes } from './user.types.js';

// need to create actions that trigger the correct case inside of our switch statement - e.g. 'SET_CURRENT_USER'
// action creation function - function that returns an object that stores

export const setCurrentUser = user => ({
 type: UserActionTypes.SET_CURRENT_USER,
 payload: user
});
// setCurrentUser takes one parameter - the user object (either userAuth object or user snapshot object)