import React, { Component } from 'react';
import Board    from './Board';
import CardList from './CardList';
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

  updateCard = (index, body) => {
    this.setState(({ cards }) => {
      cards[index].body = body;
      return cards;
    });
  }

  removeCard = (index) => {
    this.setState(({ cards }) => {
      delete cards[index];
      return cards;
    });
  }

  moveCard = (index, x, y) => {
    this.setState(({ cards }) => {
      cards[index].x = x;
      cards[index].y = y;
      return cards;
    });
  }

  resizeCard = (index, width, height) => {
    this.setState(({ cards }) => {
      cards[index].width = width;
      cards[index].height = height;
      return cards;
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <CardList
          cards={this.state.cards}
          moveCard={this.moveCard}
          resizeCard={this.resizeCard}
          removeCard={this.removeCard}
          updateCard={this.updateCard} />
        <Board />
      </div>
    );
  }
}

export default App;
