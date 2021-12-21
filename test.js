const input = [];

const allCount = Number( input[0] );

for (let i = 1; i <= allCount; i++) {
  let score = input[i].split(' ');
  let stuCount = Number(score.shift());
  let count = 0;

  let avg = score.reduce((acc, v) => (acc += +v), 0);

  for (let j = 0; j < stuCount; j++) {
    if (score[j] > avg) {
      count++;
    }
  }

  let result = ((count / stuCount) * 100).toFixed(3);

  console.log(`${result}%`);
}
