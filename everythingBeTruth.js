function truthCheck(collection, pre) {
  // Is everyone being true?
  for(var i in collection) {
      //check if property and value are not true, then return false
  if(![i].hasOwnProperty(pre) && !Boolean(collection[i][pre])) {
     return false;
     }
     }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
