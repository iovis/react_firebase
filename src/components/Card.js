import React, { Component, Fragment } from 'react';
import './Card.css';
import icon from '../images/empty.png';

class Card extends Component {
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

    // Set empty jpeg to hide the ghost image
    const img = new Image();
    img.src = icon;
    event.dataTransfer.setDragImage(img, 0, 0);

    // Distance from where the user clicked to
    // our coordinates
    this.offsetX = event.clientX - this.props.card.x;
    this.offsetY = event.clientY - this.props.card.y;
  }

  handleDrag = (event) => {
    this.x = event.clientX - this.offsetX;
    this.y = event.clientY - this.offsetY;

    requestAnimationFrame(this.moveCard);
  }

  handleDragEnd = (event) => {
    this.handleDrag(event);
  }

  moveCard = () => {
    this.props.moveCard(this.props.index, this.x, this.y);
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
      <Fragment>
        <textarea
          className="card"
          draggable="true"
          style={{
            width: card.width,
            height: card.height,
            transform: `translate(${card.x}px, ${card.y}px)`
          }}
          onDragStart={this.handleDragStart}
          onDrag={this.handleDrag}
          onDragEnd={this.handleDragEnd}
          onDragOver={this.handleDragOver}
          onMouseUp={this.handleResize}
          onChange={this.handleChange}
          value={card.body}>
        </textarea>
        <div className="card__close"
             style={{
               transform: `translate(${card.x + card.width - 12}px, ${card.y - 12}px)`
             }}
             onClick={this.removeCard}>
          &times;
        </div>
      </Fragment>
    );
  }
}

export default Card;
