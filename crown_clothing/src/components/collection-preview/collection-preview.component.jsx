import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
 <div className='collection-preview'>
  <h1 className='title'>{title.toUpperCase()}</h1>
  <div className='preview'>
   {
    // title of a given collection is destructured from otherCollectionProps that are passed into CollectionPreview and used for the title of said collection
    // items array is also destructured from otherCollectionProps and for each collection, the corresponding items array is iterated through using the .map() method and each item has the specified function applied to it
    // items array is filtered beforehand so only 4 items are featured within the items array before the .map() method is called
    // each item consists of an id, name, imageUrl and price
    // function basically says that from each item we want to use the id value as the <div> key and to display the name of the item between the <div> tags
    // This function call for our items array is called every time the CollectionPreview component is rendered or re-rendered - performance concern if array gets v.large or for slower computers
    items.filter((item, idx) => idx < 4).map(item => (
     <div key={item.id}>{item.name}</div>
    ))
   }
  </div>
 </div>
)

export default CollectionPreview;