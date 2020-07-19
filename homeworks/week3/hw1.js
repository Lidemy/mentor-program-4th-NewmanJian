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

function solve(line) {
  for (let i = 1; i <= line; i += 1) {
    printStar(i);
  }
}

rl.on('close', () => {
  solve(lines);
});
