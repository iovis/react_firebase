import React, { Component } from 'react';
import Board    from './Board';
import CardList from './CardList';
import Header   from './Header';
import './App.css';

import * as actions from '../actions';
import base from '../base';

class App extends Component {
  state = {
    cards: {}
  };

  componentWillMount() {
    this.base = base.syncState('cards', {
      context: this,
      state: 'cards'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.base);
  }

  addCard = (body, x, y, width, height) => {
    const cards = {...this.state.cards};
    cards[Date.now()] = { body, x, y, width, height };
    this.setState({ cards });
  }

  updateCard = (index, body) => {
    const cards = {...this.state.cards};
    cards[index].body = body;
    this.setState({ cards });
  }

  removeCard = (index) => {
    const cards = {...this.state.cards};
    cards[index] = null;
    this.setState({ cards });
  }

  moveCard = (index, x, y) => {
    const cards = {...this.state.cards};
    const card  = cards[index];

    cards[index].x = actions.setX(card, x);
    cards[index].y = actions.setY(card, y);

    this.setState({ cards });
  }

  resizeCard = (index, width, height) => {
    const cards = {...this.state.cards};

    cards[index].width  = actions.setWidth(width);
    cards[index].height = actions.setHeight(height);

    this.setState({ cards });
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
        <Board addCard={this.addCard} />
      </div>
    );
  }
}

export default App;
