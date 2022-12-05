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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
function findCommonChars(firstString, secondString, thirdString) {
    var e_1, _a;
    var common = __spreadArray([], __read(new Set(firstString)), false).filter(function (letter) {
        return secondString.includes(letter) && thirdString.includes(letter);
    });
    try {
        // Capital subtract 38 to start at 27
        // lowercase subtract 96 to start at 1
        for (var common_1 = __values(common), common_1_1 = common_1.next(); !common_1_1.done; common_1_1 = common_1.next()) {
            var i = common_1_1.value;
            if (isUpperCase(i)) {
                sumOfPriorities += i.charCodeAt(0) - 38;
            }
            else {
                sumOfPriorities += i.charCodeAt(0) - 96;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (common_1_1 && !common_1_1.done && (_a = common_1["return"])) _a.call(common_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return sumOfPriorities;
}
for (var i = 0; i < input.length; i += 3) {
    var firstString = input[i].split('');
    var secondString = input[i + 1].split('');
    var thirdString = input[i + 2].split('');
    findCommonChars(firstString, secondString, thirdString);
}
console.log(sumOfPriorities);
