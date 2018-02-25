import React, { Component } from 'react';
import Board    from './Board';
// import CardList from './CardList';
import Header   from './Header';
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
