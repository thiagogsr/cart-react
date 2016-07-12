import React from 'react';
import ItemList from './items/ItemList';

var Order = React.createClass({
  getInitialState: function() {
    return { items: [ { id: '1', title: 'Product A', price: 10.9, quantity: 1, discount: 1.9 } ] };
  },
  render: function() {
    return (
      <div className="order">
        <h1>Order</h1>
        <ItemList data={this.state.items} />
      </div>
    )
  }
});

export default Order;
