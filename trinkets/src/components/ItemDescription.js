import React from 'react';

function ItemDescription(props) {
  console.log('in description', props.item);
  return (
    <div>
      <p className="item-description">{props.item.description}</p>
    </div>
  );
}

export default ItemDescription;
