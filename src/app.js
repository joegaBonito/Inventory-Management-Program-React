import React, {Component} from 'react';
import ItemAccessoryList from './ItemAccessoryList';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemAccessories:[]
    };
  }
  componentDidMount() {
    axios.get('http://localhost:9007/api/itemaccessory')
    .then(response => {this.setState({itemAccessories:response.data});
    });
  }
  render() {
    return(
      <ItemAccessoryList itemAccessories={this.state.itemAccessories} />
    );
  }
}

export default App;
