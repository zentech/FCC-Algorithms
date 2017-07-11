/* pigLatin converter = if a word begins with a vowel just add
way at the end end = endway. If a word begins with a consonant
remove all letter from beginging until first volwel and add them
to the end. eg constant = onstantcay */
function translatePigLatin(str) {
  var vowels = /[aeiou]/gi;
  if(str[0].match(vowels)) {
    return str + "way";
  }
  //find first occurrence of vowel [0] in str
  var index = str.indexOf(str.match(vowels)[0]);
  return str.substring(index, str.length) + str.substring(0, index) + "ay";
}

translatePigLatin("consonant");
translatePigLatin("california")// should return "aliforniacay".
translatePigLatin("paragraphs") //should return "aragraphspay".
translatePigLatin("glove") //should return "oveglay".
translatePigLatin("algorithm") //should return "algorithmway".
translatePigLatin("eight") //should return "eightway".
