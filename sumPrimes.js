
/* sum of all prime numbers of a num */
function sumPrimes(num) {
  /* recursive function to check for prime num */
  function isPrime(n, div) {
  if(div == 1) {
    return 1;
  }
  else if(n % div === 0) {
    return -1;
  }
  else {
    return isPrime(n, div-1);
  }
}
  var sum = 0;
  for(var i = 0; i <= num; i++) {
    if(isPrime(i, i-1) !== -1) {
      console.log(i);
      sum += i;
    }
  }
  return sum;
}
sumPrimes(10);
