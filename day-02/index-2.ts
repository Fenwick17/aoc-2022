import * as fs from 'fs';

const input = fs.readFileSync('day-02/input.txt').toString().split('\n');

let totalScore = 0;
const results = {
  'A X': 0 + 3,
  'A Y': 3 + 1,
  'A Z': 6 + 2,
  'B X': 0 + 1,
  'B Y': 3 + 2,
  'B Z': 6 + 3,
  'C X': 0 + 2,
  'C Y': 3 + 3,
  'C Z': 6 + 1,
};

function findOutcome(game) {
  let key = Object.keys(results).find((key) => key == game);
  totalScore += Number(results[key]);
}

input.forEach((game) => findOutcome(game));

console.log(totalScore);
