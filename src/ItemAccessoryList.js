import React, {Component} from 'react';
import ItemAccessory from './ItemAccessory';

class ItemAccessoryList extends Component {
  itemAccessories() {
    return this.props.itemAccessories.map((itemAccessory) => {
      return (
        <ItemAccessory key={itemAccessory.itemAccessoryId} itemAccessory = {itemAccessory}/>
      );
    });
  }
  render() {
    return(
      <table>
        <tr>
          <th>ID</th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Purchase Price</th>
          <th>Sales Price</th>
          <th>Length</th>
          <th>Height</th>
          <th>Width</th>
          <th>Weight</th>
        </tr>
        {this.itemAccessories()}
      </table>
    );
  }
}

export default ItemAccessoryList;
