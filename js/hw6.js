"use strict";

//ЗАДАНИЕ 1

// function generateList(data, parent) {
//   const newparent = document.createElement("ul");
//   if (!parent) {
//     document.body.append(newparent);
//   } else {
//     parent.append(newparent);
//   }

//   for (let i = 0; i < data.length; i++) {
//     if (!Array.isArray(data[i])) {
//       const li = document.createElement("li");
//       li.textContent = `${data[i]}`;
//       newparent.append(li);
//     } else {
//       generateList(data[i], newparent);
//     }
//   }
// }

// generateList([1, 2, [1, 2], 3, 4]);

//ЗАДАНИЕ 2

// function table(parent) {
//   const table = document.createElement("table");
//   table.classList.add(
//     "table",
//     "table-bordered",
//     "table-striped",
//     "table-hover"
//   );
//   if (!parent) {
//     document.body.append(table);
//   } else {
//     parent.append(table);
//   }

//   const tbody = document.createElement("tbody");

//   table.append(tbody);
//   let counter = 1;
//   for (let i = 0; i < 10; i++) {
//     const tr = document.createElement("tr");
//     tbody.append(tr);
//     for (let j = 0; j < 10; j++) {
//       const td = document.createElement("td");
//       td.textContent = `${counter}`;
//       tr.append(td);
//       counter += 1;
//     }
//   }
// }
// table();
function generateList(data) {
    const list = document.createElement("ul");
  
    for (const value of data) {
      const li = document.createElement("li");
      if (Array.isArray(value)) {
        const innerList = generateList(value);
        li.appendChild(innerList);
      } else {
        li.textContent = value;
      }
      list.appendChild(li);
    }
  
    return list;
  }
  
  const list = generateList([1, 2, [1, 2], 3, 4]);
  document.body.appendChild(list);
