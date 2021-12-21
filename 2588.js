const fs = require('fs');
const input = fs.readFileSync( '/dev/stdin' ).toString().split( '\n' );
const A = Number( input[0] );
const B = input[1];

const number = B.split( '' ).map((val)=>+val);

console.log( A * number[2] );
console.log( A * number[1] );
console.log( A * number[0] );
console.log( A * B );
