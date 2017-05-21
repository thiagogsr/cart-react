import React from 'react';

var ItemForm = React.createClass({
  getInitialState: function() {
    return { itemId: '' };
  },
  handleItemIdChange: function(e) {
    this.setState({ itemId: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var itemId = this.state.itemId.trim();
    if (!itemId) {
      return;
    }
    this.props.onAddItem(parseInt(itemId));
    this.setState({ itemId: '' });
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="item_id">Item Code</label>
          <input type="text" id="item_id" autoFocus value={this.state.itemId} onChange={this.handleItemIdChange} />
        </div>
        <div>
          <input type="submit" value="Add" />
        </div>
      </form>
    )
  }
});

export default ItemForm;
