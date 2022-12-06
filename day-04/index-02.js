"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
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
    .readFileSync('day-04/input.txt')
    .toString()
    .split('\n');
function getAllNumbersBetween(x, y) {
    var numbers = [];
    for (var i = x; i <= y; i++) {
        numbers.push(i);
    }
    return new Set(numbers);
}
function findCommonNumbers(firstRange, secondRange) {
    var isSubset1 = __spreadArray([], __read(firstRange), false).every(function (x) { return secondRange.has(x); });
    var isSubset2 = __spreadArray([], __read(secondRange), false).every(function (x) { return firstRange.has(x); });
    if (Array.from(firstRange).some(function (value) { return secondRange.has(value); })) {
        containingPairs++;
    }
}
var containingPairs = 0;
for (var i = 0; i < input.length; i++) {
    var line = input[i].split(',');
    var first = line[0].split('-').map(function (num) { return parseInt(num); });
    var second = line[1].split('-').map(function (num) { return parseInt(num); });
    var firstRange = getAllNumbersBetween(first[0], first[1]);
    var secondRange = getAllNumbersBetween(second[0], second[1]);
    findCommonNumbers(firstRange, secondRange);
}
console.log(containingPairs);
