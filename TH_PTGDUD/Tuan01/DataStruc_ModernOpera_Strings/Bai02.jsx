'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnabry',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

let averageOdd = 0;
const oddsValues = Object.values(game.odds);

for (const odd of oddsValues) {
  averageOdd += odd;
}
averageOdd /= oddsValues.length;

console.log('Average odd:', averageOdd);

for (const [key, odd] of Object.entries(game.odds)) {
  const teamStr =
    key === 'draw'
      ? 'draw'
      : `victory ${game[key]}`;

  console.log(`Odd of ${teamStr}: ${odd}`);
}
