function smallestCommons(arr) {
  var lcm, gcd, range = [];
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);

  //creating the range with all numbers (decresing order)
  for(var j = max; j >= min; j--) {
    range.push(j);
  }

  lcm = range[0];
  for(var i = 1; i < range.length; i++) {
    gcd = findGcd(lcm, range[i]);
    lcm = (lcm * range[i]) / gcd;
  }
  return lcm;
}

//finding gcd for y
function findGcd(x, y) {
  if(y === 0)
    return x;
  else
    return gcd(y, x%y);
}
smallestCommons([1,5]);
