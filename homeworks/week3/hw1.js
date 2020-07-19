function printStar(n) {
  let res = '';
  for (let i = 1; i <= n && n <= 30; i += 1) {
    res += '*';
  }
  console.log(res);
}

function stars(n) {
  for (let i = 1; i <= n; i += 1) {
    printStar(i);
  }
}

stars(10);
