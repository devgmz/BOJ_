const fs = require( 'fs' );
const input = fs.readFileSync( 'dev/stdin' ).toString().split( '\n' );
const count = Number( input[0] );

for ( let i = 1; i <= count; i++ ){
  let sum = 0;
  let conti = 1;
  let testCase = input[i];
  for ( let j = 0; j < testCase.length; j++ ){
    if ( testCase[j] === 'O' ) {
      sum += conti;
      conti++;
    }
    else {
      conti = 1;
    }
  }
  console.log( sum );
}