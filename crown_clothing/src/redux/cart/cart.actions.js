import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
 type: CartActionTypes.TOGGLE_CART_HIDDEN
 // we don't actually need to specify a payload for our action object because we just modify the current value of hidden (current cart reducer state) in our switch statement
});