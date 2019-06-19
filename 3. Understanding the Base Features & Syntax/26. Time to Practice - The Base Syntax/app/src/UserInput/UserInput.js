import React, { Component } from 'react';
import './UserInput.css'

class UserInput extends Component {
    render() {
      return (
        <div className="UserInput">
            <input onChange={this.props.click}/>
        </div>
      );
    }
  }

export default UserInput;