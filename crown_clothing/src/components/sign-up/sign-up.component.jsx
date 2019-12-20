import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
// importing this because we are creating and authenticating new users - sign up component

import './sign-up.styles.scss';

// need to store what user is typing into the form input - hence class component is required for sign up

class SignUp extends React.Component {
 constructor() {
  super();

  this.state = {
   displayName: '',
   email: '',
   password: '',
   confirmPassword: ''
  }
 }

 handleSubmit = async event => {
  event.preventDefault();

  const { displayName, email, password, confirmPassword } = this.state;

  if (password !== confirmPassword) {
   alert("passwords don't match")
   return;
   // don't do anything if passwords don't match
  }

  try {
   const { user } = await auth.createUserWithEmailAndPassword(email,password)
   // destructure user off the returned object (it's actually a Promise - resolved Promise is an object that contains data - user is one such property of this object)
   // creates a new user account associated with the specified email address and password
   // on successful creation of the user account, this user will also be signed into the app - and we also get back a userAuth object - this is stored on the user key - hence why we are destructuring it in the way that we are
   // user account creation can fail if the account already exists or the password is invalid
   await createUserProfileDocument(user, { displayName });
   // if this succeeds, we want to reset our state afterwards (after the process has completed - hence await) - resetting our state will clear out the form - remember that when the state changes - the entire component re-renders, unmounts and re-mounts (and any dependent components)
   // remember this function's second parameter is additional data (in the form of an object) - remember that our userAuth object will not have a display name (only email and password) so we pass it in and then use the spread operator to add it to our database entry
   this.setState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
   });
  } catch(error) {
   console.error(error);
   // if something goes wrong - throw an error
  }
 };

 handleChange = event => {
  const { name, value } = event.target;
  // when the value changes for an input (i.e. if the user enters something)
  // destructure the name and value of the event object's target - i.e. the input in question
  this.setState({ [name]: value });
  // update the state
 }

 render() {
  const { displayName, email, password, confirmPassword } = this.state;
  return (
   <div className='sign-up'>
    <h2 className='title'>I do not have an account</h2>
    <span>Sign up with your email and password</span>
    <form className='sign-up-form' onSubmit={this.handleSubmit}>
      <FormInput
        type='text'
        name='displayName'
        value={displayName}
        onChange={this.handleChange}
        label='Display Name'
        required/>
      <FormInput
        type='email'
        name='email'
        value={email}
        onChange={this.handleChange}
        label='Email'
        required/>
      <FormInput
        type='password'
        name='password'
        value={password}
        onChange={this.handleChange}
        label='Password'
        required/>
      <FormInput
        type='password'
        name='Confirm Password'
        value={confirmPassword}
        onChange={this.handleChange}
        label='Confirm Password'
        required/>
      <CustomButton type='submit'>SIGN UP</CustomButton>
    </form>
   </div>
  )
 }
}

export default SignUp;
