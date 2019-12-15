import React from 'react';
import '../directory/directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
 constructor() {
  super();
  // Pull in everything we need from React.Component into our class - class now has access to all features of React.Component

  this.state = {
   sections: [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }]
 }
}
// Destructure each element in the sections array and then pass these destructured values down to our MenuItem component as props
// in order to save us having to destructure each section object into { title, imageUrl, size, id, linkUrl, id } and then passing in each of these as a prop:
// key={id} title={title} ... etc.
// We can just use the spread operator to save us from having to pass in destructured values as props where propname={propname}
// { id, ...otherSectionProps } is the same destructuring as what we specified above (the value for id is passed into a prop that does not have the name of id - hence why it is referred to explicitly)
// for props we just put key={id} and {...otherSectionProps}
// tl;dr - handy ES6 trick 
  render() {
   return (
    <div className='directory-menu'>
     {
      this.state.sections.map(({ id, ...otherSectionProps}) => (
       <MenuItem key={id} {...otherSectionProps}/>
      ))
     }
    </div>
   )
  }
}

export default Directory;