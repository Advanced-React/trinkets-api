import React, { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext';

function ItemsList(props) {
  function routeToItem(ev, item) {
    ev.preventDefault();
    props.history.push(`/item-list/${item.id}`);
    props.getItemById(item.id);
  }
  return (
    <div className="items-list-wrapper">
      {items.map(item => (
        <div
          onClick={ev => routeToItem(ev, item)}
          className="item-card"
          key={item.id}
        >
          <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
