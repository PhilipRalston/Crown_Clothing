import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
 <div className='collection-preview'>
  <h1 className='title'>{title.toUpperCase()}</h1>
  <div className='preview'>
   {
    // This function call for our items array is called every time the CollectionPreview component is rendered or re-rendered - performance concern if array gets v.large or for slower computers
    items.filter((item, idx) => idx < 4).map(item => (
     <CollectionItem key={item.id} item={item} />
     // Items array is filtered (only first 4 items show up) and then each of these chosen items (each item is an object) is passed into our CollectionItem component as the value of our item prop. The value associated with the item object's id key is used for the CollectionItem components key (a unique identifier that shows what components (if any) need to be re-rendered)
    ))
   }
  </div>
 </div>
)

export default CollectionPreview;