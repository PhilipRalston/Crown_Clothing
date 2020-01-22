import CartActionTypes from './cart.types';

const INITIAL_STATE = {
 hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
  case CartActionTypes.TOGGLE_CART_HIDDEN:
   // We want to be able to toggle whether our cart is displayed
   return {
    // If the reducer receives an action object that has the type of TOGGLE_CART_HIDDEN then
    // spread in the rest of the current state properties and values
    ...state,
    // and swap the value of hidden to the opposite value
    hidden: !state.hidden
   }
  default:
   // by default, we want to return the state unless a relevant action is identified
   return state;
 }
};

export default cartReducer;