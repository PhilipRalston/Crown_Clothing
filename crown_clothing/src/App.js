import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

// we want to store the state of the user (re signing in to our application via email and password or via Google)
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
    // onAuthStateChanged is a method from the auth library that we get from Firebase
    // inside this method it takes a function where the parameter is simply just the user authentication object
    this.unsubscribeFromAuth = 
    auth.onAuthStateChanged(async user => {
      // Gives us back a function that when we call it closes the subscription - close subscription whenever App component unmounts

      createUserProfileDocument(user);
      // current users are now stored in the database - refreshing the page - componentDidMount will fire every time - auth always persists (app instances constantly communicating with Firebase - unless user signs out - remains signed in)
      // still only got one user in our database after refreshing - no copies of data - this is because we check to see if the data at a given snapshot at a given user uid location exists or not.
    });
    // see firebase.notes.js for much more info on Firebase Auth
   
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
// Our application now has Google Authentication Sign In as well as being able to listen to authentication state changes on our Firebase backend.

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
