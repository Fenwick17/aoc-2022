import * as fs from 'fs';

const input: Array<string> = fs
  .readFileSync('day-04/input.txt')
  .toString()
  .split('\n');

function getAllNumbersBetween(x: number, y: number) {
  var numbers = [];
  for (var i = x; i <= y; i++) {
    numbers.push(i);
  }
  return new Set(numbers);
}

function findCommonNumbers(firstRange: Set<number>, secondRange: Set<number>) {
  let isSubset1 = [...firstRange].every((x) => secondRange.has(x));
  let isSubset2 = [...secondRange].every((x) => firstRange.has(x));
  if (isSubset1 || isSubset2) {
    containingPairs++;
  }
}

let containingPairs = 0;

for (let i = 0; i < input.length; i++) {
  let line: string[] = input[i].split(',');
  let first: number[] = line[0].split('-').map((num) => parseInt(num));
  let second: number[] = line[1].split('-').map((num) => parseInt(num));
  let firstRange: Set<number> = getAllNumbersBetween(first[0], first[1]);
  let secondRange: Set<number> = getAllNumbersBetween(second[0], second[1]);

  findCommonNumbers(firstRange, secondRange);
}

console.log(containingPairs);
