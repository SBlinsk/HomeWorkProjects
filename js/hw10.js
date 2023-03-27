"use strict";

class List {
  constructor(qttyOfPages) {
    this.qttyOfPages = qttyOfPages;
  }

  create() {
    const form = document.createElement("form");
    const select = document.createElement("select");
    const input = document.createElement("input");
    const div = document.createElement("div");
    const div2 = document.createElement("div");

    input.setAttribute("type", "submit");
    input.setAttribute("value", "GET");

    document.body.appendChild(div);
    document.body.appendChild(div2);

    form.appendChild(select);
    form.appendChild(input);
    div.appendChild(form);

    for (let i = 1; i <= this.qttyOfPages; i++) {
      const option = document.createElement("option");
      option.textContent = `Страница ${i}`;
      option.dataset.num = `${i}`;

      select.appendChild(option);
    }
    form.appendChild(input);

    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Остановка отправки формы
      const uls = document.querySelector("ul");
      if (uls !== null) {
        uls.remove();
      }

      const page = select.options[select.selectedIndex].dataset.num; //спиздил для получения страницы? хотелось бы понять как оно работает, не додумался)
      fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            console.log("ERROR");
          }
        })
        .then((data) => {
          const ul = document.createElement("ul");
          div2.innerHTML = "";
          data.results.forEach((result) => {
            const li = document.createElement("li");
            li.textContent = result.name;
            ul.appendChild(li);
          });
          div2.appendChild(ul);
        });

    });
  }
}

const newList = new List(5).create();
