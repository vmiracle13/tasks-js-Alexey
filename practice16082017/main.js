/**
 * Created by kml_c_14 on 2017-08-16.
 */

/* 8.	Дана таблица элементов с произвольным числом строк и столбцов, раскрасить полосами строки таблицы заданными
 параметрами data-row-odd-color  и data-row-even-color.  Если  ячейка объединяет  2 строки принять цвет первой строки
 входящей в объединение.*/

;(function() {
    document.addEventListener("DOMContentLoaded", function() {

        let tables = document.getElementsByTagName("table");

        Array.prototype.slice.call(tables).map(function(table) {
            let rows = table.getElementsByTagName("tr");
            paintTable(rows, table.dataset.rowEvenColor, table.dataset.rowOddColor);
        });

        function paintTable(rows, colorEven, colorOdd) {
            Array.prototype.slice.call(rows).map(function (elem, i) {
                i % 2 ? rows[i].style.color = colorOdd : rows[i].style.color = colorEven;
            });
        }
    });
})();