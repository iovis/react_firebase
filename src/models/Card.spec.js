import Card from './Card';

let card;

describe('Card', () => {
  beforeEach(() => {
    card = new Card('heyo!');
  });

  it('generates an id', () => {
    // Mock time
    const now = Date.now();
    Date.now = jest.fn().mockReturnValue(now);

    const card = new Card('heyo!');

    expect(card.id).toBeCloseTo(now);
  });

  it('generates the proper body', () => {
    expect(card.body).toEqual('heyo!');
  });

  describe('coordinates', () => {
    it('generates the coordinates', () => {
      expect(card.x).toEqual(0);
      expect(card.y).toEqual(0);
    });

    it('sets the coordinates', () => {
      card.x = 23;
      card.y = 32;

      expect(card.x).toEqual(23);
      expect(card.y).toEqual(32);
    });

    it('does not create coordinates lower than 0', () => {
      card.x = -23;
      card.y = -32;

      expect(card.x).toEqual(0);
      expect(card.y).toEqual(0);
    });

    it('does not create coordinates greater than the window', () => {
      const maxWidth  = 1280;
      const maxHeight = 480;

      window.innerWidth = maxWidth;
      window.innerHeight = maxHeight;

      card.x = maxWidth + card.width + 24;
      card.y = maxHeight + card.height + 52;

      expect(card.x).toEqual(maxWidth - card.width);
      expect(card.y).toEqual(maxHeight - card.height);
    });
  });

  describe('shape', () => {
    it('creates the card with default dimensions', () => {
      expect(card.width).toEqual(Card.MINIMUM_WIDTH);
      expect(card.height).toEqual(Card.MINIMUM_HEIGHT);
    });

    it('lets you modify its dimensions', () => {
      card.width  = 500;
      card.height = 300;

      expect(card.width).toEqual(500);
      expect(card.height).toEqual(300);
    });

    it('has a minimum width and height', () => {
      card.width  = 0;
      card.height = 0;

      expect(card.width).toEqual(Card.MINIMUM_WIDTH);
      expect(card.height).toEqual(Card.MINIMUM_HEIGHT);
    });
  });
});
