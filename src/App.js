import React, { Component } from 'react';
import Board    from './components/Board';
import Header   from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Board />
      </div>
    );
  }
}

export default App;
