const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const count = Number(input[0]);
const score = input[1].split(' ').map((v) => +v);
const max_score = Math.max(...score);

function average() {
  let sum = 0;
  let result;

  for (let i = 0; i < score.length; i++) {
    sum += score[i];
  }
  result = ((sum / max_score) * 100) / count;
  console.log(result);
}

average();
