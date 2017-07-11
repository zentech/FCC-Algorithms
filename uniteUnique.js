/* function returns a single array of unique numbers
not in order */
function uniteUnique(arr) {
  var newArr = [];
  //looping through a 2d array
  for(var i = 0; i < arguments.length; i++) {
    for(var j = 0; j < arguments[i].length; j++) {
    //if number not included in newArr add it
      if(!newArr.includes(arguments[i][j])) {
        newArr.push(arguments[i][j]);
      }
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
