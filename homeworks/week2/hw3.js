function reverse(str) {
  let newstr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newstr += str[i];
  }
  console.log(newstr);
}

reverse('hello');
