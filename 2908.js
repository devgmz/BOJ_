const input = require( 'fs' ).readFileSync( 'input.txt' ).toString().trim().split( ' ' );
const A = input[0].split( '' ).reverse().join('');
const B = input[1].split( '' ).reverse().join('');

const max = Math.max( A, B );
console.log( max );