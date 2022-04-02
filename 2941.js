const input = require( 'fs' ).readFileSync( 'input.txt' ).toString().trim();
let regexp = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;

const str = input.replace( regexp, ' ' );
console.log( str.length );