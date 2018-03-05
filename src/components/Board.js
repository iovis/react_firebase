import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Board.css';

class Board extends Component {
  static propTypes = {
    addCard: PropTypes.func.isRequired
  };

  addCard = () => {
    const cardWidth   = 150;
    const cardHeight  = 80;
    const paddingLeft = 20;

    const x = this.button.offsetLeft - cardWidth - paddingLeft;
    const y = this.button.offsetTop + this.button.offsetHeight - cardHeight;

    this.props.addCard('New Card', x, y, cardWidth, cardHeight);
  }

  render() {
    return (
      <div className="board">
        <div className="board__column"></div>
        <div className="board__column"></div>
        <div className="board__column"></div>
        <button className="board__button"
                ref={button => this.button = button}
                onClick={this.addCard}>
          +
        </button>
      </div>
    );
  }
}

export default Board;
