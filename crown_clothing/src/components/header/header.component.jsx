import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
// ReactComponent as Logo is a special syntax in React for importing SVG.

import './header.styles.scss';

// Use Link to set up navigation link back to our homepage when the user clicks on the logo (SVG format - Scalable Vector Graphics - small, performant and look the same regardless of image dimensions)
// The ReactComponent import name is special and tells Create React App that you want a React component that renders an SVG, rather than its filename
// Every time state changes - related components get re-rendered (unidirectional data flow down tree) - important to get state location right - sign-in and register components will both have their own state - don't really care what the state is for each other
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