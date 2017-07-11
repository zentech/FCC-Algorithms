/* convert symbols to html */
function convertHTML(str) {
  // &colon;&rpar;
  str = str.split("");
  for(var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '&':
        str[i] = "&amp;";
        break;
      case '<':
        str[i] = "&lt;";
        break;
      case '>':
        str[i] = "&gt;";
        break;
      case '"':
        str[i] = "&quot;";
        break;
      case "'":
        str[i] = "&apos;";
        break;
    }
  }

  return str.join("");
}

convertHTML("Dolce & Gabbana");
