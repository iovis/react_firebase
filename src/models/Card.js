class Card {
  constructor(body, options = {}) {
    const defaults = {
      x: 0,
      y: 0,
      width: Card.MINIMUM_WIDTH,
      height: Card.MINIMUM_HEIGHT
    };

    this.id = Date.now();
    this.body = body;

    const config = Object.assign({}, defaults, options);
    this.x = config.x;
    this.y = config.y;
    this.width  = config.width;
    this.height = config.height;
  }

  move = (x, y) => {
    this.x = x;
    this.y = y;
  }

  resize = (width, height) => {
    this.width  = width;
    this.height = height;
  }

  // getters and setters
  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0) return this._x = 0;

    // Don't let it go out of bounds
    if (value > window.innerWidth - this.width) {
      return this._x = window.innerWidth - this.width;
    }

    this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    if (value < 0) return this._y = 0;

    // Don't let it go out of bounds
    if (value > window.innerHeight - this.height) {
      return this._y = window.innerHeight - this.height;
    }

    this._y = value;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = (value < Card.MINIMUM_WIDTH) ? Card.MINIMUM_WIDTH : value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = (value < Card.MINIMUM_HEIGHT) ? Card.MINIMUM_HEIGHT : value;
  }
}

Card.MINIMUM_WIDTH  = 80;
Card.MINIMUM_HEIGHT = 50;

export default Card;
