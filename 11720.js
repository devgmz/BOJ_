const fs = require('fs');
const input = fs.readFileSync( 'dev/stdin' ).toString().split( '\n' );

const count = Number( input[0] );
const strNum = input[1].split( '' );
let sum = 0;

for ( let i = 0; i < count; i++ ){
  sum += Number( strNum[i] );
}

console.log( sum );

/*

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = input[1].split('');

let sum = num.reduce((acc, v) => {
    return acc += v * 1;
}, 0);

console.log(sum);

*/