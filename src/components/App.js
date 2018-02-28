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
    this.setState(actions.addCard(body, x, y, width, height));
  }

  updateCard = (index, body) => {
    this.setState(actions.updateCard(index, body));
  }

  removeCard = (index) => {
    this.setState(actions.removeCard(index));
  }

  moveCard = (index, x, y) => {
    this.setState(actions.moveCard(index, x, y));
  }

  resizeCard = (index, width, height) => {
    this.setState(actions.resizeCard(index, width, height));
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
