import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  static propTypes = {
    index: PropTypes.string.isRequired,
    card: PropTypes.shape({
      body: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
    }).isRequired,
    moveCard: PropTypes.func.isRequired,
    resizeCard: PropTypes.func.isRequired,
    removeCard: PropTypes.func.isRequired,
    updateCard: PropTypes.func.isRequired,
  };

  handleChange = (event) => {
    this.props.updateCard(this.props.index, event.target.value);
  }

  removeCard = () => {
    this.props.removeCard(this.props.index);
  }

  // Drag
  handleDragStart = (event) => {
    // Don't show the copy cursor
    event.dataTransfer.effectAllowed = 'move';

    this.initialX = event.clientX;
    this.initialY = event.clientY;
  }

  handleDragEnd = (event) => {
    const x = this.props.card.x + (event.clientX - this.initialX);
    const y = this.props.card.y + (event.clientY - this.initialY);

    this.props.moveCard(this.props.index, x, y);
  }

  // Prevent from resetting event.clientX/Y to zero when finishing drag
  handleDragOver(event) {
    event.preventDefault();
  }

  handleResize = (event) => {
    const { offsetWidth, offsetHeight } = event.target;
    this.props.resizeCard(this.props.index, offsetWidth, offsetHeight);
  }

  render() {
    const { card } = this.props;

    return (
      <div>
        <textarea
          className="card"
          draggable="true"
          style={{
            width: card.width,
            height: card.height,
            transform: `translate(${card.x}px, ${card.y}px)`
          }}
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd}
          onDragOver={this.handleDragOver}
          onMouseUp={this.handleResize}
          onChange={this.handleChange}
          value={card.body}>
        </textarea>

        <div
          className="card__vote"
          style={{
            transform: `translate(${card.x}px, ${card.y}px)`
          }}
        >
          ⬆
        </div>

        <div
          className="card__vote--count"
          style={{
            transform: `translate(${card.x}px, ${card.y + card.height}px)`
          }}
        >
          +3
        </div>

        <div
          className="card__close"
          style={{
            transform: `translate(${card.x + card.width - 12}px, ${card.y - 12}px)`
          }}
          onClick={this.removeCard}
        >
          &times;
        </div>
      </div>
    );
  }
}

export default Card;
