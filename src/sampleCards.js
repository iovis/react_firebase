import Card from './models/Card';

const cardList = [
  new Card('Card1', {
    x: 123,
    y: 234,
    width: 123,
    height: 90,
  }),
  new Card('Card2', {
    x: 321,
    y: 432,
    width: 223,
    height: 80,
  }),
  new Card('Card3', {
    x: 623,
    y: 142,
    width: 142,
    height: 111,
  })
];

// { [id]: [Card]
// As this is too fast to generate unique ids based on the date
// I'll create new ones
let id = 0;
const cards = cardList.reduce((cards, card) => {
  card.id = ++id;
  cards[card.id] = card;
  return cards;
}, {});

export default cards;
