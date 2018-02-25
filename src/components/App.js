import React, { Component } from 'react';
import Board    from './Board';
// import CardList from './CardList';
import Header   from './Header';
import './App.css';

import sampleCards from '../sampleCards';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: sampleCards
    };
  }

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
