import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import ItemsList from './components/ItemsList';
import Item from './components/Item';
import ItemForm from './components/ItemForm';

class App extends React.Component {
  state = {
    items: [],
    error: ''
  };

  componentDidMount() {
    axios
      .get('http://localhost:3333/items')
      .then(response => this.setState({ items: response.data }))
      .catch(error => console.log(error));
  }

  addItem = (e, item) => {
    e.preventDefault();
    axios
      .post('http://localhost:3333/items', item)
      .then(res => {
        this.setState({
          items: res.data
        });
        // HTTP STEP V - Clear data form in ItemForm and route to /item-list
        this.props.history.push('/item-list');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">Dustin's Trinkets</h1>
          <div className="nav-links">
            <NavLink exact to="/item-form">
              {this.state.isEditing ? 'Update Item' : 'Add item'}
            </NavLink>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/item-list">Shop</NavLink>
          </div>
        </nav>

          <Route exact path="/" component={Home} />
          <Route exact path="/item-list" component={ItemsList} />
          <Route path="/item-list/:id" component={Item} />
          <Route
            path="/item-form"
            render={props => <ItemForm {...props} addItem={this.addItem} />}
          />
      </div>
    );
  }
}
