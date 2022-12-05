"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var fs = require("fs");
var input = fs
    .readFileSync('day-03/input.txt')
    .toString()
    .split('\n');
var sumOfPriorities = 0;
function isUpperCase(str) {
    return str === str.toUpperCase();
}
function findCommonChars(firstHalf, secondHalf) {
    var set1 = new Set(firstHalf);
    var common = __spreadArray([], new Set(secondHalf), true).filter(function (char) { return set1.has(char); });
    // let common = [
    //   ...new Set(
    //     firstHalf.filter((letter: string) => secondHalf.includes(letter))
    //   ),
    // ];
    // Capital subtract 38 to start at 27
    // lowercase subtract 96 to start at 1
    for (var _i = 0, common_1 = common; _i < common_1.length; _i++) {
        var i = common_1[_i];
        if (isUpperCase(i)) {
            sumOfPriorities += i.charCodeAt(0) - 38;
        }
        else {
            sumOfPriorities += i.charCodeAt(0) - 96;
        }
    }
    return sumOfPriorities;
}
input.forEach(function (sack) {
    var firstHalf = sack.slice(0, sack.length / 2).split('');
    var secondHalf = sack.slice(sack.length / 2).split('');
    findCommonChars(firstHalf, secondHalf);
});
console.log(sumOfPriorities);
