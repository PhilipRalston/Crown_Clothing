export const addItemToCart = (cartItems, cartItemToAdd) => {
 // cartItems - all the elements that are currently within our cartItems array
 // cartItemToAdd - the element (new cart item selection) that we want to add to the end of our cartItems array
 const existingCartItem = cartItems.find(
  // find() is an array method returns the first element that matches a specified condition
  cartItem => cartItem.id === cartItemToAdd.id
  // get each individual cart item
  // if the id of the cart item is equal to the id of the cart item we wish to add
  // we want to return the first item that matches this condition
  // if no cartItems match the condition then existingCartItem will be undefined
 );

 if (existingCartItem) {
  // if the existingCartItem exists (i.e. one of our cartItem ids matches with the id of the cartItem we wish to add)
  return cartItems.map(cartItem =>
   cartItem.id === cartItemToAdd.id 
   ? {...cartItem, quantity: cartItem.quantity + 1}
   : cartItem
   // remember we need to generate a new array so that any components can re-render properly
   // for each cartItem in our cartItems array
   // check for aforementioned condition
   // if condition is matched then we want to modify the cartItem object (from the cartItems array) so that quantity is increased by 1 from its original value 
   // all other existing keys and values are spread in using the spread operator
   // otherwise, if the condition is not matched then we just want to return our cartItem object
   // once the entire cartItems array has been iterated through a new cartItems array is returned
   )
 }

 return [...cartItems, { ...cartItemToAdd, quantity: 1}]
 // if no cartItems have their id match the id of the cart item that is to be added (i.e. existingCartItem does not exist) then we want to return a new array that contains all of our pre-existing cartItems and that has a new element - our cartItemToAdd object (with all other keys and values spread in) with an additional key of quantity with a base value of 1.
 // we set up the quantity key-value pair here for our new cartItem object so that it can be referenced by the if block above
};