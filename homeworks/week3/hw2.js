/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

// eslint-disable-next-line
function solve(input) {
  const temp = input[0].split('');
  const n = Number(temp[0]);
  const m = Number(temp[1]);
  for (let i = n; i <= m; i++) {
    if (isNarcissistic(i)) {
      console.log(i);
    }
  }
}

function digitsCount(number) {
  let n = number;
  if (n === 0) return 1;
  let res = 0;
  while (n !== 0) {
    n = Math.floor(n / 10);
    res++;
  }
  return res;
}

function isNarcissistic(number) {
  const n = number;
  let m = n;
  const digits = digitsCount(m);
  let sum = 0;
  while (m !== 0) {
    const num = m % 10;
    sum += num ** digits;
    m = Math.floor(n / 10);
  }
  return sum === number;
}

rl.on('close', () => {
  solve(lines);
});
