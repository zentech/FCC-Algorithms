/* code to convert decimal to roman number */

function convertToRoman(num) {

  //mapping roman numbers
    var romanNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var realNumbers= [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = "";

    for(var i = 0 ; i < realNumbers.length; i++) {
        while(realNumbers[i] <= num) {
            roman += romanNums[i];
            num -= realNumbers[i];
        }
    }
 return roman;
}
