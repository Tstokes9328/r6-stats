import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  getStats = () => {
    axios.get('/stats').then(response => {
      console.log(response.data)
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getStats}>Get Stats</button>
      </div>
    );
  }
}

export default App;
