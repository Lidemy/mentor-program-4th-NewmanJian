const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function printStar(n) {
  let res = '';
  for (let i = 1; i <= n; i += 1) {
    res += '*';
  }
  console.log(res);
}

function solve(input) {
  for (let i = 1; i <= input; i += 1) {
    printStar(i);
  }
}

rl.on('close', () => {
  solve(lines);
});
