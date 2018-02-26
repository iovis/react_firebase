import Card from '../models/Card';

export function addCard(body, x, y, width, height) {
  return function(state) {
    const card = new Card(body, { x, y, width, height });
    state.cards[card.id] = card;
    return state;
  };
}

export function updateCard(index, body) {
  return function(state) {
    state.cards[index].body = body;
    return state;
  };
}

export function removeCard(index) {
  return function(state) {
    delete state.cards[index];
    return state;
  };
}

export function moveCard(index, x, y) {
  return function(state) {
    state.cards[index].move(x, y);
    return state;
  };
}

export function resizeCard(index, width, height) {
  return function(state) {
    state.cards[index].resize(width, height);
    return state;
  };
}
