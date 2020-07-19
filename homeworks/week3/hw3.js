/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line);
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines);
});

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
// eslint-disable-next-line
function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite');
  }
}

function isPrime(number) {
  if (number === 1) return false;
  const sqrtNumber = Math.sqrt(number);
  for (let i = 2; i <= sqrtNumber; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
