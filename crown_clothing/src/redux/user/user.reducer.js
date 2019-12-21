// when we initialize the state for the first time - nothing - Redux doesn't know that we have any state when the app first initializes
// need to set initial state when app first initializes/mounts on our DOM for the first time (like this.state for our App component currently - we specify an initial state)
const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
// function takes (current) state object and action object (has a type and a payload)
// use INITIAL_STATE as default parameter value/default value for state (ES6) - if state is ever undefined it is assigned the value of our initial state
// but - null is considered a value - if state is ever null and it is passed into the function - null is still considered to be a valid value - won't fall back to initial state value
  switch (action.type) {
   // based on action.type value = string
   // if the case of action.type is something we want - render something - otherwise by default just return the state (state remains unchanged)
   // remember - ever single reducer gets every single action that ever gets fired (even if those actions are not related to the reducer)
   // by default we return the state because if none of the action types match then we just want to return the state and not modify it
   case 'SET_CURRENT_USER':
    // whenever fired action type is SET_CURRENT_USER
    return {
     // return a new object - represents the new state that our user reducer is going to transform into
     // everything else on the (current)state - we always want to spread in everything on the state because we only want to modify the values that we care about
     // value we care to set is currentUser - set equal to payload of action object
     ...state,
     currentUser: action.payload
    }

   default:
    return state;

  }
}
// state - gets passed to Reducer from Redux store whenever an action fires
// state = current state (before/as) action fires/is firing

export default userReducer;
