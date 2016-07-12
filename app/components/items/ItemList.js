import React from 'react';
import Item from './Item';

var ItemList = React.createClass({
  render: function() {
    var items = this.props.data.map(function(item) {
      return (
        <Item key={item.id} id={item.id} title={item.title} />
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
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
