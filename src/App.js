import React, { Component } from 'react';
import './App.css';
import ListContainer from './list_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Youngest Five People</h1>
        <ListContainer/>
      </div>
    );
  }
}

export default App;
