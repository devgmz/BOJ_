solution();

function d( n ) {
  let sum = 0;
  const strNum = String( n );
  for ( let i = 0; i < strNum.length; i++ ){
    sum += +strNum[i];
  }
  return n + sum;
}

function solution() {
  const arr = Array( 10001 ).fill( 0 );
  for ( let i = 1; i <= 10000; i++ ){
    const answer = d( i );
    if ( answer <= 10000 ) {
      arr[answer]++;
    }
  }
  for ( let i = 1; i <= 10000; i++ ){
    if ( arr[i] === 0 ) {
      console.log( i );
    }
  }
}