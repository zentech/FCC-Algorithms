/* replace space between words by a dash - */
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  var spaceReg = /[\s_]/g;
  var camelReg = /([a-z])([A-Z])/g;
  str = str.replace(camelReg, '$1 $2').toLowerCase();
  return str.replace(spaceReg, "-");

}

spinalCase('This Is Spinal Tap');
