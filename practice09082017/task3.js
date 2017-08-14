/**
 * Created by Victoria on 10.08.2017.
 */

/*
 * На вход подается произвольный массив значений ФИО учеников , предмет, оценка.
 Сформировать html код таблицы в строках которой был бы список учеников  а в колонках список предметов с оценками пример:

 ФИО	Математика	Физика 	 Биология
 Иванов И.М.	12	10	6
 Петров А.Е.	10	11	11
 */

//Let accept, that there is an array of objects and each object has "S.N.P", "Mathematics", "Physics", "Biology" properties,
// they are the same for all the objects and their order is one for all the objects.

;(function() {
  document.addEventListener("DOMContentLoaded", function () {
    let arrayOfStudents = [
      {
        "S.N.P": "Ivanov I.M.",
        "Mathematics": 12,
        "Physics": 10,
        "Biology": 6
      },
      {
        "S.N.P": "Petrov A.E.",
        "Mathematics": 10,
        "Physics": 11,
        "Biology": 11
      },
      {
        "S.N.P": "Sidorov N.T.",
        "Mathematics": 5,
        "Physics": 5,
        "Biology": 5
      },
      {
        "S.N.P": "Prohodko O.B.",
        "Mathematics": 9,
        "Physics": 8,
        "Biology": 7
      }
    ];

    function createTable(arr) {
      let table = document.createElement('table');
      let tableStr = "<table><tr><th>S.N.P.</th><th>Mathematics</th><th>Physics</th><th>Biology</th></tr>";

      //or this line can be replaced with the following, if the object properties are not defined beforehand
      /*
      let tableStr = "<table><tr>";

      for (let prop in arrayOfStudents[0]) {
        tableStr += "<th>" + prop + "</th>";
      }
      */

      arr.forEach(function (obj) {
        tableStr += "<tr>";

        for (let key in obj) {
          tableStr += "<td>" + obj[key] + "</td>";
        }

        tableStr += "</tr>";
      });
      table.innerHTML = tableStr + "</table>";
      table.setAttribute("cellpadding", "5");
      document.body.appendChild(table);
    }

    createTable(arrayOfStudents);
  });
}());
