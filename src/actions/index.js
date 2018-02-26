export function addCard(body, x, y, width, height) {
  return function(state) {
    state.cards[Date.now()] = { body, x, y, width, height };
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
    state.cards[index].x = x;
    state.cards[index].y = y;
    return state;
  };
}

export function resizeCard(index, width, height) {
  return function(state) {
    state.cards[index].width = width;
    state.cards[index].height = height;
    return state;
  };
}
