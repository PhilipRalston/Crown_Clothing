import React from 'react';

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'


class ShopPage extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   collections: SHOP_DATA
  }
 }

 render() {
  const {collections} = this.state;
  // Destructure collections data first Each collection object has an id, title, routeName and items (items is an array of individual item objects that have an id, name, imageUrl and price)
  return(
   <div className='shop-page'>
   {
    collections.map(({ id, ...otherCollectionProps }) => (
     <CollectionPreview key={id} {...otherCollectionProps}/>
    ))
    // For each collection object within our collections data we destructure into the id and otherCollectionProps (using the spread operator) - otherCollectionProps includes the title, routeName and items array
    // otherCollectionProps is passed into our CollectionPreview component using the spread operator
    // Key helps React to determine which components need to be re-rendered
   }
  </div>
  )
 }
}

export default ShopPage;