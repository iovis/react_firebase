import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
  constructor() {
    super();
    this.addCard = this.addCard.bind(this);
  }

  addCard() {
    // const button = document.querySelector('.board__button');
    // const width = 150;
    // const height = 80;

    // const x = button.offsetLeft - width - 20;
    // const y = button.offsetTop + button.offsetHeight - height;

    // this.props.store.addCard('Test', x, y, width, height);
  }

  render() {
    return (
      <div className="board">
        <div className="board__column"></div>
        <div className="board__column"></div>
        <div className="board__column"></div>
        <button className="board__button" onClick={this.addCard}>
          +
        </button>
      </div>
    );
  }
}

export default Board;
