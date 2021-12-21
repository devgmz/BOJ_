const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

seq( +input[0] );

function f(num) {
  const strNum = String(num);
  if (strNum.length <= 2) {
    return true;
  }
  const first = +strNum[1] - +strNum[0];
  let second = +strNum[1];
  for (let i = 2; i < strNum.length; ++i) {
    if (strNum[i] - second !== first) {
      return false;
    }
    second = +strNum[i];
  }
  return true;
}
function seq(n) {
  let cnt = 0;
  for (let i = 1; i <= n; ++i) {
    if (f(i)) {
      cnt++;
    }
  }
  console.log(cnt);
}
