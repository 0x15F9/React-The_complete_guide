import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message/Message';
import Person from './Person/Person';

class App extends Component{
  state = {
    visible: true
  }

  toggleVisibility = (event) => {
    this.state.visible ? this.setState({visible: false}) : this.setState({visible: true});
  }

  display = () => {
      if (this.state.visible) {
        return(
            <div>         
              <Person />
              <Person />
            </div> 
        )
      };
  }

  render() {
      return (
        <div className="App">
          <Message click={this.toggleVisibility} />
          {this.display()}
        </div>
      );
    }
}

export default App;
