//find symmetric difference between multiple sets (arrays)
function sym(args) {
  //puttign all arguments inside arr array;
  var arr = Array.prototype.slice.call(arguments);

  //return the array using reduce function which takes to two array
  //then we search those array and compare for unique numbers.
  return arr.reduce(function(arr1, arr2) {

    arr1.forEach(function(item) {
      if(arr2.indexOf(item) < 0 && result.indexOf(item) < 0)
        return result.push(item);
    });

    arr2.forEach(function(item) {
      if(arr1.indexOf(item) < 0 && result.indexOf(item) < 0)
        return result.push(item);
    });

    return result;
  });
}

sym([1, 2, 3], [5, 2, 1, 4]);
