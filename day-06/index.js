"use strict";
exports.__esModule = true;
var fs = require("fs");
var input = fs.readFileSync('day-06/input.txt').toString();
var marker = function (input, startMarker) {
    for (var i = 0; i <= input.length; i++) {
        var testString = input.slice(i, i + startMarker);
        var set = new Set(testString);
        if (set.size === startMarker) {
            return i + startMarker;
        }
    }
};
console.log(marker(input, 14));
