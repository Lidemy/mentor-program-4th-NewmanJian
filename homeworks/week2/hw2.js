function capitalize(str) {
  let s = '';
  const code = str.charCodeAt(0);
  s += String.fromCharCode(code - 32);
  if (str[0] >= 'a' && str[0] <= 'z') {
    for (let i = 1; i < str.length; i += 1) {
      s += str[i];
    }
    return s;
  }
  return str;
}

console.log(capitalize('hello'));
