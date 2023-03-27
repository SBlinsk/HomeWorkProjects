"use strict";
// {/* <form>
//   <input type="text">
//   <input type="button">
// </form>

// <ul>

// </ul> */}

let form = document.createElement("form");
let inputText = document.createElement("input");
inputText.setAttribute("type", "text");
let inputButton = document.createElement("input");
inputButton.setAttribute("type", "button");

document.body.appendChild(form);
form.appendChild(inputText);
form.appendChild(inputButton);

let ul = document.createElement("ul");
document.body.append(ul);

let arrOfNames = ["Вася", "Петя", "Сашка Сергиенко aka МОЛДОВА"];
initList();

function handleFormSubmit(e) {
  if (!inputText.value) {
    return false;
  }
  e.preventDefault();
  const data = inputText.value;
  arrOfNames.unshift(data);
  inputText.value = "";
  initList();
}

function initList() {
  const liList = document.querySelectorAll("ul li");
  if (liList) {
    for (let li of liList) {
      li.remove();
    }
  }

  for (let key in arrOfNames) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Удалить";
    const setButton = document.createElement("button");
    setButton.classList.add("set");
    setButton.textContent = "Редактировать";

    li.textContent = `${arrOfNames[key]}`;
    ul.append(li);
    li.append(setButton);
    li.append(deleteButton);
  }
}
//ДАЛЬШЕ БУДЕТ ЗАКОМЕНТИРОВАН СТАРЫЙ КОД, ПРОБЛЕМА БЫЛА В ТОМ, ЧТО НУЖНО БЫЛО ДЕЛЕГИРОВАТЬ ФУНКЦИИ НА UL

//удаление строк из списка
// function deleteInfo() {
//   const deleteButtons = document.querySelectorAll(".delete");

//   for (let i = 0; i < deleteButtons.length; i++) {
//     deleteButtons[i].addEventListener("click", () => {
//       arrOfNames.splice(i, 1);
//       initList();
//     });
//   }
// }
// //редактирование строк из списка
// function setInfo() {
//   const setButtons = document.querySelectorAll(".set");

//   for (let i = 0; i < setButtons.length; i++) {
//     setButtons[i].addEventListener("click", () => {
//       arrOfNames[i] = prompt("введите текст");
//       initList();
//     });
//   }
// }
// ТЕПЕРЬ ИДЕТ ПОДСМОТРЕННЫЙ
function deleteInfo() {
  ul.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
      const index = Array.from(
        event.target.parentNode.parentNode.children
      ).indexOf(event.target.parentNode);
      arrOfNames.splice(index, 1);
      initList();
    }
  });
}

function setInfo() {
  ul.addEventListener("click", (event) => {
    if (event.target.classList.contains("set")) {
      const index = Array.from(
        event.target.parentNode.parentNode.children
      ).indexOf(event.target.parentNode);
      arrOfNames[index] = prompt("Введите текст");
      initList();
    }
  });
}
inputButton.addEventListener("click", handleFormSubmit);
deleteInfo();
setInfo();
