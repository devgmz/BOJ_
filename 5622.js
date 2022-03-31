const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');
const str = input[0].split( '' );
let result = 0;
const dial = {
  'ABC': 3,
  'DEF': 4,
  'GHI': 5,
  'JKL': 6,
  'MNO': 7,
  'PQRS': 8,
  'TUV': 9,
  'WXYZ': 10,
}

for ( let i = 0; i < str.length; i++ ){ //1
  for ( let j = 0; j < Object.keys( dial ).length; j++ ){ //0
    for ( let k = 0; k < Object.keys( dial )[j].length; k++ ) { // k=0
      if ( str[i] === Object.keys( dial )[j][k] ) {
        str[i] = Object.values( dial )[j];
        result += str[i]
      }
    }
  }
}
console.log( str );
console.log( result );