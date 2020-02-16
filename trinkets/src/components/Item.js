import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Route, NavLink } from 'react-router-dom';

import ItemDescription from './ItemDescription';
import ItemShipping from './ItemShipping';

/*
  stretch:
  create a new context object for item
  wrap the shipping and description routes in the provider and pass in item
  consume item in the respective components
*/

function Item(props) {


    const { id } = useParams();
  // Yes thank you <3
  const item = items.find(item => `${item.id}` === id);

  // TODO: get items from context
  // get the clicked on item from items
  if (!item) {
    return <h2>Loading item data...</h2>;
  }

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
        <NavLink exact to={`/item-list/${item.id}`}>
          the story
        </NavLink>
        <NavLink to={`/item-list/${item.id}/shipping`}>shipping</NavLink>
      </nav>
      <Route
        exact
        path="/item-list/:id"
        render={props => <ItemDescription {...props} item={item} />}
      />
      <Route
        path="/item-list/:id/shipping"
        render={props => <ItemShipping {...props} item={item} />}
      />
    </div>
  );
}

export default Item;
