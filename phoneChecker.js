//telephone checker 
function telephoneCheck(str) {
  // Good luck!
  var regExp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g;
  return regExp.test(str);
}



telephoneCheck("555-555-5555");
