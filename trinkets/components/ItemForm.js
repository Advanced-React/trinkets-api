import React from 'react';

class ItemForm extends React.Component {
  state = {
    item: this.props.activeItem || {
      name: '',
      price: '',
      imageUrl: '',
      description: '',
      shipping: ''
    }
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.activeItem &&
      prevProps.activeItem !== this.props.activeItem
    ) {
      this.setState({
        item: this.props.activeItem
      });
    }
  }

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === 'price') {
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      item: {
        ...prevState.item,
        [ev.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    if (this.props.activeItem) {
      this.props.updateItem(e, this.state.item);
    } else {
      this.props.addItem(e, this.state.item);
    }
    this.setState({
      item: {
        name: '',
        price: '',
        imageUrl: '',
        description: '',
        shipping: ''
      }
    });
  };

  render() {
    return (
      <div>
        <h2>{`${this.props.activeItem ? 'Update' : 'Add New'} Item`}</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.item.name}
          />
          <div className="baseline" />

          <input
            type="number"
            name="price"
            onChange={this.changeHandler}
            placeholder="Price"
            value={this.state.item.price}
          />
          <div className="baseline" />

          <input
            type="string"
            name="imageUrl"
            onChange={this.changeHandler}
            placeholder="Image"
            value={this.state.item.imageUrl}
          />
          <div className="baseline" />

          <input
            type="string"
            name="description"
            onChange={this.changeHandler}
            placeholder="Description"
            value={this.state.item.description}
          />
          <div className="baseline" />

          <input
            type="string"
            name="shipping"
            onChange={this.changeHandler}
            placeholder="Shipping"
            value={this.state.item.shipping}
          />
          <div className="baseline" />

          <button className="md-button form-button">{`${
            this.props.activeItem ? 'Update' : 'Add New'
          } Item`}</button>
        </form>
      </div>
    );
  }
}

export default ItemForm;
