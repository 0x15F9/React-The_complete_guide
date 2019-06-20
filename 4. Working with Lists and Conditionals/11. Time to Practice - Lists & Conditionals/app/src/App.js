import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    text: "Default",
    textLength: 7
  }

  onTextChanged = (event) => {
    const newLength = event.target.value.length;
    this.setState({
      text: event.target.value,
      textLength: newLength
    })
  }

  removeTile = (position) => {
    const text = this.state.text.slice(0, position)+this.state.text.slice(position+1)
    this.setState({...this.state, text })
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.text} onChange={this.onTextChanged} />
        <p>Length of text: {this.state.textLength}</p>
        <Validation length={this.state.textLength} />
        <p>Char List:</p>
          {[...this.state.text].map((character, index) => {
            return (<Char character={character} click={() => this.removeTile(index)} />)
          })}
      </div>
    );
  }
}

export default App;
