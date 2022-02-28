module.exports =
    function reverse (n) {
    if (Number(n) < 0) {
        n = Number(n - n - n);
    }
  let arr = [];
  let string = n.toString();
  for (let i = 0; i < string.length; i ++) {
      arr.push(string[i]);
  }
  return  arr.reverse().join('');
}

