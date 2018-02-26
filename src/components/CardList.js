import React, { Component } from 'react';
import Card from './Card';
import './CardList.css';

class CardList extends Component {
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
