"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('day-02/input.txt').toString().split('\n');
var totalScore = 0;
var results = {
    'A X': 3 + 1,
    'A Y': 6 + 2,
    'A Z': 0 + 3,
    'B X': 0 + 1,
    'B Y': 3 + 2,
    'B Z': 6 + 3,
    'C X': 6 + 1,
    'C Y': 0 + 2,
    'C Z': 3 + 3
};
function findOutcome(game) {
    var key = Object.keys(results).find(function (key) { return key == game; });
    console.log("".concat(game, ": ").concat(results[key]));
    totalScore += Number(results[key]);
}
input.forEach(function (game) { return findOutcome(game); });
// for (let i = 0; i <= input.length; i++) {
//   findOutcome(input[i]);
// }
console.log(totalScore);
