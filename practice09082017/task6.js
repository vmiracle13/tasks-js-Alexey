/**
 * Created by Victoria on 12.08.2017.
 */

/*
 ***  Есть ряд так называемых автоморфных чисел, например  6252 = 390625, или 71063762 = 50543227109376
 * найти сумму всех замечательных чисел до 10 в 20 степени
 * (https://ru.wikipedia.org/wiki/%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D1%80%D1%84%D0%BD%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE)
 */

function sum() {
  let arr = [];

  //generates sum of pairs of automorphic numbers
  for (let i = 1; i < 21; i++) {
    arr[i - 1] = 1 + (new Array(i).join("0")) + 1;
  }

  //there is no 10001 in sum of pairs of automorphic numbers, so it can not be used for sum of automorphic numbers
  arr.splice(3, 1);

  var result = arr.reduce(function(sum, elem) {
    return add(sum, elem);
  }, 1);

  return result;
}

console.log(" sum of automorphic numbers = " + sum());

function res(a, b, result, carry, base) {
  if(a.length == 0 && b.length == 0 && !carry)
    return result;

  //take lower levels
  var left = parseInt(a.pop() || '0', 10);
  var right = parseInt(b.pop() || '0', 10);

  //sum them and add checking from the last iteration
  var l = left + right + (carry || 0);

  //invoke for the next levels, correctly calculating adding number and number of the next level
  return res(a, b, l % base + (result || ""), Math.floor(l/base), base);
}

function add(number1, number2) {
  return res(number1.toString().split(""), number2.toString().split(""), "","",10).toString();
}
