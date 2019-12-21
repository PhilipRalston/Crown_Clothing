// Redux Notes
// What does a reducer look like?

const userReducer = (currentState, action) => {
 // every reducer is just a function
 // takes 2 parameters - state (the current state before the action updates the state/previous state) and the action (from the component)
 // function returns an object and that object is going to be the new state of our userReducer
 switch (action.type) {
  // switch statements are basically big if statements
  // check action type
  case 'SET_CURRENT_USER':
   // if action type is as above
   return {
    // return a new object
    ...currentState,
    // spread in current state
    currentUser: action.payload
    // make sure that current user property is equal to the payload of the action object
   };
   // we return a new object because we want our components to re-render
   // if we pass in the same old object but one of the properties has a different value - our components might not re-render the way that we want them to - because of the way React components work
   // React components only re-render if their props change
   // The only way that props can change is if the object (containing the state) is different
   // if we pass the same property (i.e. the same object) but with a different value - the object is not different and our component will not update
   default:
    // if none of the action types match, we just want to return the current state - we don't want to re-render anything - action does not affect our reducer - reducers listen to every action but only change if said action is relevant to them
    return currentState;
 }
};