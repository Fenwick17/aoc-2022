import * as fs from 'fs';

const input: string = fs.readFileSync('day-06/input.txt').toString();

const marker = (input: string, startMarker: number) => {
  for (let i = 0; i <= input.length; i++) {
    const testString: string = input.slice(i, i + startMarker);
    const set = new Set(testString);
    if (set.size === startMarker) {
      return i + startMarker;
    }
  }
};

console.log(marker(input, 14));
