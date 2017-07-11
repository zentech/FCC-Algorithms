/* function to return the missing letter in
the string. if no missing letter, then return
undefined */
function fearNotLetter(str) {
  //grabbing ascii for first letter
  var code = str.charCodeAt(0);
  for(var i = 0; i < str.length; i++) {
    //compare the ascii in string with ascii in code sequence
    if(str.charCodeAt(i) !== code) {
        return String.fromCharCode(code);
    }
    code++;
}
  return undefined;
}

fearNotLetter("abce");
