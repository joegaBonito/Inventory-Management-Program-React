import React, {Component} from 'react';

class ItemAccessory extends Component {
  render() {
        return (
            <tr>
                <td>{this.props.itemAccessory.itemAccessoryId}</td>
                <td>{this.props.itemAccessory.productId}</td>
                <td>{this.props.itemAccessory.productName}</td>
                <td>{this.props.itemAccessory.purchasePrice}</td>
                <td>{this.props.itemAccessory.salesPrice}</td>
                <td>{this.props.itemAccessory.accLength}</td>
                <td>{this.props.itemAccessory.accHeight}</td>
                <td>{this.props.itemAccessory.accWidth}</td>
                <td>{this.props.itemAccessory.accWeight}</td>
            </tr>
        );
    }
}

export default ItemAccessory;
