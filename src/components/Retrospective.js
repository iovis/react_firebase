import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Board    from './Board';
import CardList from './CardList';

import * as actions from '../actions';
import base from '../base';

class Retrospective extends Component {
  static propTypes = {
    user: PropTypes.string.isRequired
  };

  state = {
    cards: {}
  }

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
    // Why the frick can't I pass an empty array??? => FIREBASE
    cards[Date.now()] = { body, x, y, width, height, votes: [''] };
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

  toggleVote = (index, user) => {
    const cards = {...this.state.cards};
    const userIndex = cards[index].votes.indexOf(user);

    if (userIndex < 0) {
      cards[index].votes.push(user);
    } else {
      cards[index].votes.splice(userIndex, 1);
    }

    this.setState({ cards });
  }

  render() {
    return (
      <Fragment>
        <CardList
          user={this.props.user}
          cards={this.state.cards}
          toggleVote={this.toggleVote}
          moveCard={this.moveCard}
          resizeCard={this.resizeCard}
          removeCard={this.removeCard}
          updateCard={this.updateCard} />
        <Board addCard={this.addCard} />
      </Fragment>
    );
  }
}

export default Retrospective;
