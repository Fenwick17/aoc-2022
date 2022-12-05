"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('day-02/input.txt').toString().split('\n');
var totalScore = 0;
// const results = {
//   'A X': 3 + 1,
//   'A Y': 6 + 2,
//   'A Z': 0 + 3,
//   'B X': 0 + 1,
//   'B Y': 3 + 2,
//   'B Z': 6 + 3,
//   'C X': 6 + 1,
//   'C Y': 0 + 2,
//   'C Z': 3 + 3,
// };
var results = {
    'A X': 0 + 3,
    'A Y': 3 + 1,
    'A Z': 6 + 2,
    'B X': 0 + 1,
    'B Y': 3 + 2,
    'B Z': 6 + 3,
    'C X': 0 + 2,
    'C Y': 3 + 3,
    'C Z': 6 + 1
};
function findOutcome(game) {
    var key = Object.keys(results).find(function (key) { return key == game; });
    totalScore += Number(results[key]);
}
input.forEach(function (game) { return findOutcome(game); });
console.log(totalScore);
