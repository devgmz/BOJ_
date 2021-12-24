const fs = require('fs');
const input = fs.readFileSync( 'dev/stdin' ).toString();

const arr = [];

for ( let i = 97; i <= 122; i++ ){
  arr.push( input.indexOf( String.fromCharCode(i) ) ); //baekjoon
}

console.log( arr.join( ' ' ) );
