const fs = require('fs');
const input = fs.readFileSync( 'dev/stdin' ).toString().trim().split( '\n' ).map( ( v ) => +v );

const numArr = input.map((x) => x % 42);

const result = Array.from(new Set(numArr));
console.log(result.length);
