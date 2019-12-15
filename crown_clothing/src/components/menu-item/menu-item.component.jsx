import React from 'react';
import { withRouter } from 'react-router-dom';
// withRouter - Higher order component (HOC) - function that takes a component as an argument and returns you a modified component.
// Essentially a function that gives you a 'powered up' component

import '../menu-item/menu-item.styles.scss';
// Destructuring from props that are passed into MenuItem
// somematchedurl/appendedurl
// First of all the entered url is just localhost:3000
// This exactly matches the path of / for our first Route and so the HomePage is rendered and the HomePage is passed History, Location and Match as props
// Because we 'powered up' our MenuItem component using withRouter - our MenuItem also has access to these same props. For the Match prop in particular the match.url value will just be / (as will the path) - we're at the HomePage
// This url then has shop/hats appended to it (using template literals) and then we use the push method of the history prop to navigate to the corresponding page
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
 <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
     <div className='background-image' style={{
      backgroundImage: `url(${imageUrl}`}}/>
     <div className='content'>
       <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
     </div>
 </div>
);

export default withRouter(MenuItem);
// Power up MenuItem component so that it has access to those things related to our Router
// Returns MenuItem component that has access to location, history and match props