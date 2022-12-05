"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('day-01/input.txt').toString().split('\n\n');
var elves = input.map(function (elf) { return elf.split('\n').map(Number); });
var allElvesTotal = [];
for (var i = 0; i < elves.length; i++) {
    var tempVal = elves[i].reduce(function (x, y) {
        return x + y;
    }, 0);
    allElvesTotal.push(tempVal);
}
var topThreeElves = allElvesTotal.sort(function (a, b) { return b - a; }).slice(0, 3);
var topThreeElvesTotal = topThreeElves.reduce(function (a, b) { return a + b; }, 0);
console.log(topThreeElvesTotal);
