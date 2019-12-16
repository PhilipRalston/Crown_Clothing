import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
 <div className='collection-preview'>
  <h1 className='title'>{title.toUpperCase()}</h1>
  <div className='preview'>
   {
    // This function call for our items array is called every time the CollectionPreview component is rendered or re-rendered - performance concern if array gets v.large or for slower computers
    items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
     <CollectionItem key={id} {...otherItemProps} />
    ))
    // For items array (for each CollectionPreview component)
    // Filter items array so that only four item objects are contained within said items array
    // Then use map() to first destructure each item object into id and otherItemProps (via spread operator) and then generate a CollectionItem component based on these destructured values. otherItemProps passed into CollectionItem as props.
   }
  </div>
 </div>
)

export default CollectionPreview;