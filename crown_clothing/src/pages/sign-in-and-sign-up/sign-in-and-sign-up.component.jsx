import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-up.styles.scss';

// Reason for functional component rather than class component (with state) - going to keep state for sign-in and sign-up components
const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'><SignIn/></div>
);

export default SignInAndSignUpPage;