import * as fs from 'fs';

const input = fs.readFileSync('day-01/input.txt').toString().split('\n\n');
const elves = input.map((elf: string) => elf.split('\n').map(Number));

const allElvesTotal = [];

for (let i = 0; i < elves.length; i++) {
  let tempVal = elves[i].reduce(function (x: number, y: number): number {
    return x + y;
  }, 0);
  allElvesTotal.push(tempVal);
}

const topThreeElves = allElvesTotal.sort((a, b) => b - a).slice(0, 3);
const topThreeElvesTotal = topThreeElves.reduce((a, b) => a + b, 0);
console.log(topThreeElvesTotal);
