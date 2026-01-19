const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries()) {
  console.log(`${player} : ${i + 1} `);
}

let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}
console.log(sum / Object.values(game.odds).length);

for (const [key, odd] of Object.entries(game.odds)) {
  const team =
    key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${team}: ${odd}`);
}

const scorers = {};

for (const player of game.scored) {
  scorers[player] = scorers[player]
    ? scorers[player] + 1
    : 1;
}

console.log(scorers);
