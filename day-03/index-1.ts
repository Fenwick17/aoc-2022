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
  firstHalf: Array<string>,
  secondHalf: Array<string>
): number {
  let common: Array<string> = [...new Set(firstHalf)].filter((letter: string) =>
    secondHalf.includes(letter)
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

input.forEach((sack) => {
  const firstHalf: Array<string> = sack.slice(0, sack.length / 2).split('');
  const secondHalf: Array<string> = sack.slice(sack.length / 2).split('');
  findCommonChars(firstHalf, secondHalf);
});

console.log(sumOfPriorities);
