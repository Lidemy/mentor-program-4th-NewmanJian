function join(arr, concatStr) {
  let result = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (i === arr.length - 1) {
      result += arr[i];
    } else {
      result += arr[i] + concatStr;
    }
  }
  return result;
}


function repeat(str, times) {
  let result = '';
  for (let i = 1; i <= times; i += 1) {
    result += str;
  }
  return result;
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
