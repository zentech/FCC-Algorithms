/* sum of odd fibonacci numbers */
function sumFibs(num) {
  var fib1 = 1;
  var fib2 = 0;
  var oddFib = 0;
  while(fib1 <= num) {
    if(fib1 % 2 !== 0) {
      oddFib += fib1;
    }
    fib1 += fib2;
    fib2 = fib1 - fib2;

  }
  return oddFib;
}

sumFibs(4);
