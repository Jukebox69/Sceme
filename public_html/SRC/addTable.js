/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    function addTable() {
      var body = document.querySelector("body"),
          tableWidth = document.getElementById("table-width"),
          tableHeight = document.getElementById("table-height"),
          width = tableWidth.value,
          height = tableHeight.value,
          numRows = document.getElementById("rows"),
          numColumns = document.getElementById("columns"),
          rows = numRows.value,
          columns = numColumns.value,
          tr = "",
          td = "",
          firstTable = document.querySelector("table");
      console.log(width);
      console.log(height);
      console.log(rows);
      console.log(columns);

      table = document.createElement("table"),
      checkbox = document.getElementById("checkbox");
      if (checkbox.checked === true) {
        table.setAttribute("border", "2px");
      } else {
        table.setAttribute("border", "0");
      }
      table.setAttribute("width", width);
      table.setAttribute("height", height);
      for (var i = 0; i < rows; i++) {
        tr = document.createElement("tr");
        for (var j = 0; j < columns; j++) {
          td = document.createElement("td");
          //ADD Listener
          td.addEventListener("click", handler1);
          text = document.createTextNode((i + 1) + "." + (j + 1));
          td.appendChild(text);                          
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
      console.log(tr);
      console.log(td);
      if (firstTable === null) {
        return body.appendChild(table);
      } else {
        var newTable = body.appendChild(table);
        return document.body.replaceChild(newTable, firstTable);
      }
    }
