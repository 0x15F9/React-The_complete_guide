import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = { 
      username: "Hirra",
    }

  changeUsername = (event) => {
    this.setState({username: event.target.value});
  }
  
  render() {
    return (
      <div className="App">

        <UserInput click={this.changeUsername} />

        {/* Passing username as Props */}
        <UserOutput name="Isfaaq"/>
        <UserOutput name="Izhaar"/>
        {/* Passing username as State */}
        <UserOutput name={this.state.username}/>

      </div>
    );
  }
}

export default App;
