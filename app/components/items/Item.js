import React from 'react';

var Item = React.createClass({
  render: function() {
    var subtotal = this.props.data.price * this.props.data.quantity,
        total = subtotal - this.props.data.discount;

    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.title}</td>
        <td>{this.props.data.price}</td>
        <td>{this.props.data.quantity}</td>
        <td>{subtotal}</td>
        <td>{this.props.data.discount}</td>
        <td>{total}</td>
        <td><a href="#">Remove</a></td>
      </tr>
    )
  }
});

export default Item;
