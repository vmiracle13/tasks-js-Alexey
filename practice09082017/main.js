/*
 8.	Для заданной строки вернуть слово, состоящeе из букв всех слов, расположенных посередине,
 например (abc  ccdd befda rnf )=> bfn т.к. в ccdd нет буквы всередине
 */

function middleChar(str) {
  if (typeof str != "string" || str.length == 0 || str.trim().length == 0) {
    return "Please, enter the correct data.";
  }

  let strArray = str.split(" ");
  let newStr = "";
  let negativeResult = "";

  strArray.forEach((elem) => elem.length % 2 != 0 ? newStr += elem.slice(elem.length/2, (elem.length/2 + 1)) :
    negativeResult = "Unfortunately, all the words of the string are of the odd length." );
  return newStr || negativeResult;
}

console.log( middleChar("lalal") );
