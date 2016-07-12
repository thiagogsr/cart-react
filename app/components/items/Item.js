import React from 'react';

var Item = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.title}</td>
      </tr>
    )
  }
});

export default Item;
