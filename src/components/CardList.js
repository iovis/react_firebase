import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

class CardList extends Component {
  static propTypes = {
    cards: PropTypes.object.isRequired,
    moveCard: PropTypes.func.isRequired,
    resizeCard: PropTypes.func.isRequired,
    removeCard: PropTypes.func.isRequired,
    updateCard: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="card-list">
        {Object
          .keys(this.props.cards)
          .map(index => (
            <Card
              key={index}
              index={index}
              card={this.props.cards[index]}
              moveCard={this.props.moveCard}
              resizeCard={this.props.resizeCard}
              removeCard={this.props.removeCard}
              updateCard={this.props.updateCard} />
          ))
        }
      </div>
    );
  }
}

export default CardList;
