import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';

// For our sign-in and sign-up components we need to use class components rather than functional components. This is because we need to store and have access to the data that the user types in.

class SignIn extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   email: '',
   password: ''
  }
 }

 handleSubmit = event => {
  event.preventDefault();

  this.setState({ email: '', password: '' });
 }
 // By defining our handleSubmit method using an arrow function, the keyword this is bound to our class component SignIn - this allows us to use this.setState
 // Throughout our class, this refers to the SignIn class

 handleChange = event => {
  const { value, name } = event.target;
  // Get the name and value of event.target (the target of the event object (which is in itself an object) - name will either be email or password and value will be whatever the user types in to the aforementioned input)

  this.setState({ [name]: value });
  // Use these to update the state dynamically depending on the users input for email/password
 }

 render() {
  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span className='title'>Sign in with your email and password</span>

      <form onSubmit={this.handleSubmit}>
        <FormInput 
        name="email" 
        type="email" 
        value={this.state.email}
        handleChange={this.handleChange}
        label="Email"
        required/>
        
        <FormInput
        name="password" 
        type="password" 
        value={this.state.password}
        handleChange={this.handleChange}
        label="Password"
        required/>


        <div className='buttons'>
         <CustomButton type='submit'>Sign In</CustomButton>
         <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
        </div>
      </form>
    </div>
  );
 }
}

// isGoogleSignIn - property will be passed a value of true if we do not assign a value to it - what we want

export default SignIn;