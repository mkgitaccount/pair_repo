import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gameboard from './gameboard.js'

class App extends Component {
  constructor() {
    super();
    
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Gameboard />
        </div>
        
      </div>
    );
  }
}

export default App;
