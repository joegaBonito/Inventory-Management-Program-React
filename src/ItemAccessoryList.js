import React, {Component} from 'react';
import ItemAccessory from './ItemAccessory';

class ItemAccessoryList extends Component {
  render() {
    const itemAccessories = this.props.itemAccessories.map((itemAccessory) => <ItemAccessory key={itemAccessory.itemAccessoryId} itemAccessory = {itemAccessory}/>);
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
        {itemAccessories}
      </table>
    );
  }
}

export default ItemAccessoryList;
