import React from 'react';

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

 handleChange = event => {
  const { value, name } = event.target;
  // Get the name and value of event.target (the target of the event object (which is in itself an object) - name will either be email or password and value will be whatever the user types in to the aforementioned input)

  this.setState({ [name]: value });
  // Use these to update the state dynamically depending on the users input for email/password
 }

 render() {
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={this.handleSubmit}>
        <input 
        name="email" 
        type="email" 
        value={this.state.email}
        onChange={this.handleChange}
        required/>
        <label>Email</label>
        
        <input 
        name="password" 
        type="password" 
        value={this.state.password}
        onChnage={this.handleChange}
        required/>
        <label>Password</label>

        <input type="submit" value="Submit Form"/>
      </form>
    </div>
  );
 }
}

export default SignIn;