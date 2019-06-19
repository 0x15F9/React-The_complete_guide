import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message/Message';
import Person from './Person/Person';

class App extends Component{
  state = {
    visible: false
  }

  toggleVisibility = (event) => {
    this.state.visible ? this.setState({visible: false}) : this.setState({visible: false});
  }

  render() {
      return (
        <div className="App">
          <Message />
          { this.state.visible ?
            <div>          <Person />
            <Person /></div> :
            null
          }

        </div>
      );
    }
}

export default App;
