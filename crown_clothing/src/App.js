import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import { setCurrentUser } from './redux/user/user.actions.js';

class App extends React.Component {  
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // when app component is mounted on our DOM
      // we add an observer that watches for changes to a user's sign in state
      // when the sign in state changes (i.e. if someone signs in or out then we pass in the userAuth (user authentication object) into our async function)
      if (userAuth) {
        // if the userAuth object exists/is not null
        const userRef = await createUserProfileDocument(userAuth);
        // wait for userRef (document reference object) to be returned from our function

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
              // spread in remaining data from snapShot object - need to call .data() method to access data contained within SnapShot object
            });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div>
     <Header/>
     <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={SignInAndSignUpPage}/>
     </Switch>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
// connect our App to the store - setCurrentUser (an action object creator function that we defined in user.actions.js) is imported into App.js
// The function is then used to create an action object (that sets the current user)
// dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
// With React Redux, your components never access the store directly - connect does it for you. React Redux gives you two ways to let components dispatch actions:
// 1. By default, a connected component receives props.dispatch and can dispatch actions itself.
// 2. connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.

