import * as fs from 'fs';

const input = fs.readFileSync('day-02/input.txt').toString().split('\n');

let totalScore = 0;
const results = {
  'A X': 3 + 1,
  'A Y': 6 + 2,
  'A Z': 0 + 3,
  'B X': 0 + 1,
  'B Y': 3 + 2,
  'B Z': 6 + 3,
  'C X': 6 + 1,
  'C Y': 0 + 2,
  'C Z': 3 + 3,
};

function findOutcome(game) {
  let key = Object.keys(results).find((key) => key == game);
  totalScore += Number(results[key]);
}

input.forEach((game) => findOutcome(game));

console.log(totalScore);
