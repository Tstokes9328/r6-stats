import React, {Component} from 'react';
import axios from 'axios';

//Style Sheet
import './navbar.css';


class Navbar extends Component {
    constructor(){
        super()

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

    render(){
        return (
            <div/>
        )
    }
}

export default Navbar;