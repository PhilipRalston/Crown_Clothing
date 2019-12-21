import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

// we want to store the state of the user (re signing in to our application via email and password/ sign-up or via Google)
// store it in state of App - we can then pass the information into components that need it
// need App to be a class component rather than a functional component

class App extends React.Component {  
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth = null
  // New property/method for our App class

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // when app component is mounted on our DOM
      // we add an observer that watches for changes to a user's sign in state
      // when the sign in state changes (i.e. if someone signs in or out then we pass in the userAuth (user authentication object) into our async function)
      if (userAuth) {
        // if the userAuth object exists/is not null
        const userRef = await createUserProfileDocument(userAuth);
        // wait for userRef (document reference object) to be returned from our function

        userRef.onSnapshot(snapShot => {
          // add listener for Document Snapshot object changes onto our userRef object - if there is a change then the snapShot object is taken and is used to update the state (currentUser value)
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
              // spread in remaining data from snapShot object - need to call .data() method to access data contained within SnapShot object
            }
          });
        });
      }
      // otherwise currentUser is set to null - happens when user signs out/ no user is signed in
      // remember when our state changes, our entire app will unmount from the DOM and our open subscription to user sign in changes will be closed. When our app component remounts the subscription is re-established.
      this.setState({ currentUser: userAuth });
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div>
     <Header currentUser={this.state.currentUser}/>
     <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignUpPage}/>
     </Switch>
    </div>
    );
  }
}

export default App;

// We place our Header component outside of our Switch and Route components
// By doing this, our header is always present and rendered, despite whatever RRD (react-router-dom) Switch and Route components decide to render
