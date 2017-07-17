//array to flat multi dimensional array
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flatArr = [];

  function stripArr(a) {
    if(!Array.isArray(a)) {
    flatArr.push(a);
  }
  else {
    for(var i in a) {
      stripArr(a[i]);
    }
  }
  }

  stripArr(arr);
  return flatArr;
  }

steamrollArray([1, [2], [3, [[4]]]]);
