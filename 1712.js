const input = require( 'fs' ).readFileSync( 'input.txt' ).toString().trim().split( ' ' );
const A = +input[0];
const B = +input[1];
const C = +input[2];

const margin = C - B;
const count = Math.floor(A / margin) + 1

console.log( margin <= 0 ? -1 : count );