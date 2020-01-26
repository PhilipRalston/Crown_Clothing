import React from 'react';

import './custom-button.styles.scss';

// conditionally render a class name based off prop isGoogleSignIn - if isGoogleSignIn is true
// custom-button class is always assigned
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
 <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
 {children}
 </button>
);
// For our sign-in component we have put the text Sign In between the <CustomButton> tags - this text is passed into our <CustomButton> component via the first aforementioned prop
export default CustomButton;