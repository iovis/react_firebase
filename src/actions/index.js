const MINIMUM_WIDTH  = 80;
const MINIMUM_HEIGHT = 50;

export function setX(card, value) {
  if (value < 0) {
    return 0;
  } else if (value > window.innerWidth - card.width) {
    // Don't let it go out of bounds
    return window.innerWidth - card.width;
  }

  return value;
}

export function setY(card, value) {
  if (value < 0) {
    return 0;
  } else if (value > window.innerHeight - card.height) {
    // Don't let it go out of bounds
    return window.innerHeight - card.height;
  }

  return value;
}

export function setWidth(value) {
  return (value < MINIMUM_WIDTH) ? MINIMUM_WIDTH : value;
}

export function setHeight(value) {
  return (value < MINIMUM_HEIGHT) ? MINIMUM_HEIGHT : value;
}
