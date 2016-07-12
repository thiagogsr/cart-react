import React from 'react';
import Item from './Item';

var ItemList = React.createClass({
  render: function() {
    var items = this.props.data.map(function(item) {
      return (
        <Item key={item.id} data={item} />
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Discount</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    )
  }
});

export default ItemList;
