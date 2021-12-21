const fs = require('fs');
let input = fs.readFileSync( 'dev/stdin' ).toString().split( '\n' );

let numArr = input.map( ( v ) => +v );
let count = 1;
let max = numArr[0];

for ( let i = 1; i < numArr.length; i++ ){
  if ( max < numArr[i] ) {
    max = numArr[i];
    count = i+1;
  }
}

console.log( `${max}\n${count}` );