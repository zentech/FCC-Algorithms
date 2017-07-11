/* dna matching the series of dna input */
function pairElement(str) {
  var dnaMap = {A: 'T', T: 'A', C: 'G', G: 'C'};
  var dnaOut = [];
  for(var i = 0; i < str.length; i++) {
    dnaOut.push([str[i], dnaMap[str[i]]]);
  }
  return dnaOut;
}

pairElement("GCG");
