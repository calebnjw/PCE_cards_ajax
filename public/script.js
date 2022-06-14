// variable to store game deck.
let gameDeck = [];

// empty arrays to store cards that computer and player draw.
let computerHand = [];
let playerHand = [];

const createBaseDeck = () => {
  const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
  const names = [
    'Ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'Jack',
    'Queen',
    'King',
  ];

  const cardDeck = []; // array to store finished cards.

  for (let suitCounter = 0; suitCounter < suits.length; suitCounter += 1) {
    // suit counter: max 3 (total 4): hearts, spades, diamonds, clubs.
    const currentSuit = suits[suitCounter];
    // loops through individual card names and pushes card object.
    for (let rankCounter = 0; rankCounter < names.length; rankCounter += 1) {
      // rank counter: max 12 (total 13): ace, 2, 3, ..., 10, jack, queen, king.
      const currentName = names[rankCounter];
      const currentRank = rankCounter + 1;
      cardDeck.push({
        rank: currentRank,
        name: currentName,
        suit: currentSuit,
      });
    }
  }
  return cardDeck;
};

const shuffleCards = function (cardDeck) {
  let currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    let randomIndex = getRandomIndex(cardDeck.length);
    let randomCard = cardDeck[randomIndex];
    let currentCard = cardDeck[currentIndex];
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    currentIndex = currentIndex + 1;
  }
  return cardDeck;
};

const gameDeck = () => shuffleCards(createBaseDeck());

const drawCard = (deck) => deck.pop(0);

// function to draw two cards from the deck to the hand.
// and arrange it in descending order.
const dealHand = function (deck, hand) {
  hand.push(drawCard(deck));
  hand.push(drawCard(deck));
  return hand;
};

const resetGame = function () {
  gameDeck = [];
  computerHand = [];
  playerHand = [];
};

// function to substitute suit name with emoji.
const emojiSuit = function (suitName) {
  let emoji;
  if (suitName === 'Hearts') {
    emoji = '♥️';
  } else if (suitName === 'Spades') {
    emoji = '♠️';
  } else if (suitName === 'Diamonds') {
    emoji = '♦️';
  } else {
    emoji = '♣️';
  }
  return emoji;
};
