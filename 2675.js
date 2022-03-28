const input = require('fs').readFileSync('test.txt').toString().split('\n');
const count = input.shift();

for (let i = 0; i < count; i++) {
  let result = '';

  const [strCnt, str] = input[i].split(' ');

  for (let j = 0; j < str.length; j++) {
    result += str[j].repeat(strCnt);
  }
  console.log(result);
}
