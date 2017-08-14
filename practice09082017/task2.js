/*
*. Реализовать функцию для проверки пин-кода (с помощью замыканий)
Функция инициализируется пин кодом и макс числом  повторов
При последующих вызовах передается значение пин кода и возвращается true или false
*/

function checkPin(pin, numberOfAttempt) {
  if (typeof pin != "number" || typeof numberOfAttempt != "number" || (pin+"").length != 4 || isNaN(pin) ||
    isNaN(numberOfAttempt) || pin < 0 || numberOfAttempt <= 0) {
    alert("Please, enter the correct data.");
    return;
  }

  let countAttempts = 0;

  return function(pinToCheck) {
    countAttempts++;

    if (typeof pinToCheck != "number" || (pinToCheck+"").length != 4 || isNaN(pin) || pin < 0) {
      alert("Please, enter the correct pin-code.");
      return;
    }

    if (countAttempts > numberOfAttempt) {
      alert("Unfortunately, the number of attempts exceeds allowable");
      return;
    }

    if (pinToCheck == pin) {
      return true;
    } else {
      return false;
    }
  }
}

let enterPin = checkPin( 5555, 5);
enterPin(1236);
enterPin(7894);
console.log( enterPin(5555) );

