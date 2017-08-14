/**
 * Created by Victoria on 10.08.2017.
 */
/*
 Реализовать функцию (замыкание ?) для игры в крестики нолики

 1	2	3
 4	5	6
 7	8	9

 На вход подается для первого хода номер клетки или пусто (если надоб чтобы система делала первый ход).
 Функция возвращает номер клетки хода системы
 Далее на вход подается номер клетки хода 2, а в ответ возвращается ход системы и т.д.
 по завершении выдать результат system win/user win.
 */

let win = ["123", "456", "789", "147", "258", "369", "159", "357"];

function ticTacToe() {
  console.log("New game! *******************************");
  let first = "";
  let user = "";
  let system = "";
  let numbersOfCells = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return function (act) {
    let systemAct;

    //condition to start a new game
    if (numbersOfCells.length <= 3) {
      console.log("Please, start a new game!");
      return;
    }

    //attempt to select the chosen cell
    if (system.length && numbersOfCells.indexOf(act) == -1) {
      return "Please, choose another cell.";
    }

    switch (first) {
      case "":
        if (act == undefined) {
          first = "system";
          systemAct = numbersOfCells[Math.floor(Math.random() * numbersOfCells.length)];
          numbersOfCells.splice(numbersOfCells.indexOf(+systemAct), 1);
          system = system + systemAct;
        } else {
          first = "user";
          user += act;
          numbersOfCells.splice(numbersOfCells.indexOf(+act), 1);
          systemAct = numbersOfCells[Math.floor(Math.random() * numbersOfCells.length)];
          numbersOfCells.splice(numbersOfCells.indexOf(+systemAct), 1);
          system = system + systemAct;
        }
        break;

      case "system":
        user += act;
        numbersOfCells.splice(numbersOfCells.indexOf(+act), 1);
        if (system.length == 3) {
          break;
        }
        systemAct = numbersOfCells[Math.floor(Math.random() * numbersOfCells.length)];
        numbersOfCells.splice(numbersOfCells.indexOf(+systemAct), 1);
        system = system + systemAct;
        break;

      case "user":
        user += act;
        numbersOfCells.splice(numbersOfCells.indexOf(+act), 1);
        systemAct = numbersOfCells[Math.floor(Math.random() * numbersOfCells.length)];
        numbersOfCells.splice(numbersOfCells.indexOf(+systemAct), 1);
        system = system + systemAct;
        break;
    }

    if (user.length == 3) {
      if (checkWinner(user) && checkWinner(system)) {
        return "Friendship won!";
      }
      if (checkWinner(system)) {
        return "System is a winner!";
      }
      if (checkWinner(user)) {
        return "User is a winner!";
      }
      return "Noone is a winner!";
    }

    if (!!system.length) {
      return systemAct;
    }
  }
}

//user starts a game
let act = ticTacToe();
console.log(act(2));
console.log(act(4));
console.log(act(5));
console.log(act(6));

//system starts a game
let act1 = ticTacToe();
console.log(act1());
console.log(act1(8));
console.log(act1(9));
console.log(act1(7));
console.log(act1(1));
console.log(act1(2));


function checkWinner(acts) {
  for (var i = 0; i < win.length; i++) {
    let regexp = new RegExp("[" + +win[i] + "]", "g");
    if (acts.match(regexp) != null && acts.match(regexp).length == 3) {
      return true;
    }
  }
}
