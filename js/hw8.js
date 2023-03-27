"use strict";

// const wrapper = document.createElement("div");
// wrapper.classList.add("wrapper");
// document.body.append(wrapper);

// function createSquare() {
//   const square = document.createElement("div");
//   square.classList.add("square");
//   //   square.textContent = 0;
//   const span = document.createElement("span");
//   span.textContent = 0;
//   square.appendChild(span);

//   const plusButton = document.createElement("button");
//   plusButton.classList.add("plusButton");
//   plusButton.textContent = "+";

//   const minusButton = document.createElement("button");
//   minusButton.classList.add("minusButton");
//   minusButton.textContent = "-";

//   square.appendChild(plusButton);
//   square.appendChild(minusButton);

//   let i = 0;

//   // REVIEW: Тут можно не передавать i.
//   // Внутри функции changeColor и так будет досутп к этой переменной из замыкания
//   square.addEventListener("click", changeColor(square));

//   function changeColor(element) {
//     let arrOfColors = ["blue", "green", "yellow"];

//     return function () {
//       element.style.backgroundColor = arrOfColors[i];
//       i++;
//       if (i === 3) {
//         i = 0;
//       }
//     };
//   }
//   plusButton.addEventListener("click", (event) => {
//     // REVIEW: чтобы при клике на кнопку не менялся цвет
//     // Он меняется из-за всплытия события, т.к. кнопка находится внутри дива square
//     event.stopPropagation();
//     let count = +span.textContent;
//     count++;
//     span.textContent = count;
//   });

//   minusButton.addEventListener("click", (event) => {
//     // REVIEW: чтобы при клике на кнопку не менялся цвет
//     // Он меняется из-за всплытия события, т.к. кнопка находится внутри дива square
//     event.stopPropagation();
//     let count = +span.textContent;
//     count--;
//     span.textContent = count;
//   });

//   return square;
// }

// for (let i = 0; i < 5; i++) {
//   const square = createSquare();
//   wrapper.appendChild(square);
// }

