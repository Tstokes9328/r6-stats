import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      platform: ''
    }
  }

  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleChangePlatform = (event) => {
    this.setState({
      platform: event.target.value
    })
  }

  getStats = () => {
    let body = this.state;
    axios.post('/stats', body).then(response => {
      console.log(response.data)
    })
  }

  render() {
    return (
      <div className="App">
        <input placeholder="Username" onChange={this.handleChangeUsername}></input>
        <input placeholder="Platform" onChange={this.handleChangePlatform}></input>
        <button onClick={this.getStats}>Get Stats</button>
      </div>
    );
  }
}

export default App;
