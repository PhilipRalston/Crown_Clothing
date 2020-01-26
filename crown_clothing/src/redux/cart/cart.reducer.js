import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
 hidden: true,
 cartItems: []
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
   };
  case CartActionTypes.ADD_ITEM:
    return {
      ...state,
      // return the rest of the state (via spread operator)
      cartItems: addItemToCart(state.cartItems, action.payload)
      // pass our current cartItems array (from our cart reducer's (slice of) state) and the payload of the add item action object (i.e. the item that we wish to add to our cart) into our addItemToCart function that we defined in our cart.utils.js file

      // always need to return/pass a new object if we want a component to re-render - if we just change a property without generating a new object, re-rendering will not work
    }
  default:
   // by default, we want to return the state unless a relevant action is identified
   return state;
 }
};

export default cartReducer;