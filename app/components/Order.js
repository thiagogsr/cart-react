import React from 'react';
import ItemList from './items/ItemList';
import ItemForm from './items/ItemForm';

var Order = React.createClass({
  getInitialState: function() {
    return { items: [ { id: 1, title: 'Product A', price: 10.9, quantity: 1, discount: 1.9 } ] };
  },
  handleAddItem: function(itemId) {
    var foundItem = this.state.items.find(i => i.id === itemId);
    if (foundItem) {
      var newItems = this.state.items.map(function(item) {
        if (item.id === foundItem.id) {
          item.quantity += 1;
        }
        return item;
      });
    } else {
      var defaultValues = { price: 0, quantity: 1, discount: 0 };
      var newItem = Object.assign(defaultValues, { id: itemId });
      var newItems = this.state.items.concat([newItem]);
    }

    this.setState( { items: newItems } );
  },
  render: function() {
    return (
      <div className="order">
        <h1>Order</h1>
        <ItemForm onAddItem={this.handleAddItem} />
        <ItemList data={this.state.items} />
      </div>
    )
  }
});

export default Order;
