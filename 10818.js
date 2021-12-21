let fs = require( 'fs' );
let input = fs.readFileSync('dev/stdin' ).toString().split( '\n' );
let count = Number( input[0] );
let numArr = input[1].split(' ').map( ( v ) => +v );

let max = numArr[0];
let min = numArr[0];

for ( let i = 1; i < count; i++ ){
  if ( max < numArr[i] ) {
    max = numArr[i];
  }
  
  if ( min > numArr[i] ) {
    min = numArr[i];
  }
}
console.log( `${min} ${max}` );

// let fs = require('fs');
// let input = fs.readFileSync( 'dev/stdin' ).toString().split( '\n' );
// let [count, ...others] = input;
// let numArr = others.map( ( v ) => +v );

// let max = numArr[0];
// let min = numArr[0];

// for (let i = 1; i < count; i++) {
//   if (max < numArr[i]) {
//     max = numArr[i];
//   }

//   if (min > numArr[i]) {
//     min = numArr[i];
//   }
// }
// console.log(`${min} ${max}`);