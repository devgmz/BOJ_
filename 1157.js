const input = require('fs').readFileSync('dev/stdin').toString().split(' ');
const arr = new Array(26).fill(0);
const str = input[0].toUpperCase();

for (let i = 0; i < str.length; i++) {
  arr[str[i].charCodeAt(0) - 65] += 1;
}
const max = Math.max(...arr);
const result =
  arr.filter((value) => value === max).length === 1
    ? String.fromCharCode(arr.findIndex((v) => v === max) + 65)
    : '?';
console.log(result);
