/**
 * Created by Victoria on 11.08.2017.
 */
/*
 **** Дан массив строк, написать функцию возвращающую N перестановок данного массива.
 */

function replaceElem(arr, n) {
  if (!Array.isArray(arr) || !arr.length || !n || typeof n != "number" || isNaN(n)) {
    return "Please, enter the correct data.";
  }

  let countOfInvocations = 0;

  return function() {
    countOfInvocations++;
    let arrayTransformed = [];

    //if all transformations have been seen
    if (countOfInvocations > n) {
      console.log("Unfortunately, the number of attempts to generate a new array exceeded");
      return null;
    }

    for (let i = 0; i < arr.length; i++) {
      arrayTransformed[getIndex()] = arr[i];
    }

    function getIndex() {
      let k = Math.floor(Math.random() * arr.length);
      if (arrayTransformed[k])  {
        return getIndex();
      }
      return k;
    }

    //checking arrayTransformed just in consol
    //console.log(arrayTransformed);
    return arrayTransformed;
  }
}

let transformations = replaceElem([1, 2, 3, 4, 5], 3);
transformations();
transformations();
transformations();
transformations();
