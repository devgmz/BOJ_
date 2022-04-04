const input = require( 'fs' ).readFileSync( 'input.txt' ).toString().trim().split( '\n' );
const caseCount = Number( input[0] );
let result = 0;

for ( let i = 1; i <= caseCount; i++ ) {
  const str = input[i];
  const arr = [];
  let groupCheck = true;

  for ( let j = 0; j < str.length; j++ ){
    if ( arr.indexOf( str[j] ) === -1 ) {
      arr.push( str[j] );
    } else {
      if ( arr.indexOf( str[j] ) !== arr.length - 1 ) {
        groupCheck = false;
        break;
      }
    }
  }
  if ( groupCheck ) {
    result += 1;
  }
}

console.log( result );


// 연속으로 나오거나, 하나만있는경우 OK
// 나왔던 알파벳이 한칸지나서 나오면 NO