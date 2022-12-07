"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('day-05/input.txt').toString();
var splitString = input.split('\n\n');
var crates = splitString[0];
var instructions = splitString[1];
console.log(crates);
