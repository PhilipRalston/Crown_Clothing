import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
 <button className='custom-button' {...otherProps}>
 {children}
 </button>
);
// For our sign-in component we have put the text Sign In between the <CustomButton> tags - this text is passed into our <CustomButton> component via the first aforementioned prop
export default CustomButton;