import React from 'react';

import './form-input.styles.scss';

// Don't need state so functional component
const FormInput = ({ handleChange, label, ...otherProps }) => (
 // Want label and input to be together in group
 <div className='group'>
   <input className='form-input' onChange={handleChange} {...otherProps}/>
   {
    // We want to selectively render a label
    // Don't know if we actually need it or not
    // If we want to pass in a label property, we will generate one - if we don't there's no need for one

    label ?
    (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
     {label}
     </label>): null
    // if we have passed in a label prop then we want to render a label if not then we render null (i.e. nothing)
    // if a label is rendered then if something is entered into the corresponding input then an additional class of shrink will be added to the label's class list (the label will already have the class of form-input-label) by default
   }
 </div>
);

export default FormInput;