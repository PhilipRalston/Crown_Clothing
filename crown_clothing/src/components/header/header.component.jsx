import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
// ReactComponent as Logo is a special syntax in React for importing SVG.

import './header.styles.scss';

// Use Link to set up navigation link back to our homepage when the user clicks on the logo (SVG format - Scalable Vector Graphics - small, performant and look the same regardless of image dimensions)
const Header = () => (
 <div className='header'>
   <Link className='logo-container' to='/'>
    <Logo className='logo'/>
   </Link>
   <div className='options'>
    <Link className='option' to='/shop'>SHOP</Link>
    <Link className='option' to='/shop'>CONTACT</Link>
   </div>
 </div>
);

export default Header;