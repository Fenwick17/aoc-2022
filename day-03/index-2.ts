import * as fs from 'fs';

const input: Array<string> = fs
  .readFileSync('day-03/input.txt')
  .toString()
  .split('\n');

let sumOfPriorities: number = 0;

function isUpperCase(str: string) {
  return str === str.toUpperCase();
}

function findCommonChars(
  firstString: Array<string>,
  secondString: Array<string>,
  thirdString: Array<string>
): number {
  let common: Array<string> = [...new Set(firstString)].filter(
    (letter: string) =>
      secondString.includes(letter) && thirdString.includes(letter)
  );

  // Capital subtract 38 to start at 27
  // lowercase subtract 96 to start at 1
  for (let i of common) {
    if (isUpperCase(i)) {
      sumOfPriorities += i.charCodeAt(0) - 38;
    } else {
      sumOfPriorities += i.charCodeAt(0) - 96;
    }
  }

  return sumOfPriorities;
}

for (let i = 0; i < input.length; i += 3) {
  let firstString = input[i].split('');
  let secondString = input[i + 1].split('');
  let thirdString = input[i + 2].split('');
  findCommonChars(firstString, secondString, thirdString);
}

console.log(sumOfPriorities);
