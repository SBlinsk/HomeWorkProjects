"use strict";

class List {
  constructor(qttyOfPages) {
    this.qttyOfPages = qttyOfPages;
    this.form = document.createElement("form");
    this.select = document.createElement("select");
    this.input = document.createElement("input");
    this.div = document.createElement("div");
    this.div2 = document.createElement("div");
  }

  create() {
    this.input.setAttribute("type", "submit");
    this.input.setAttribute("value", "GET");

    document.body.appendChild(this.div);
    document.body.appendChild(this.div2);

    this.form.appendChild(this.select);
    this.form.appendChild(this.input);
    this.div.appendChild(this.form);

    for (let i = 1; i <= this.qttyOfPages; i++) {
      const option = document.createElement("option");
      option.textContent = `Страница ${i}`;
      option.dataset.num = `${i}`;

      this.select.appendChild(option);
    }
    this.form.appendChild(this.input);

    this.form.addEventListener("submit", (event) => {
      event.preventDefault(); // Остановка отправки формы
      const uls = document.querySelector("ul");
      if (uls !== null) {
        uls.remove();
      }

      const page = this.select.options[this.select.selectedIndex].dataset.num; //нашел это решение,хотелось бы понять как оно работает, не додумался)
      this.input.disabled = true;
      this.select.disabled = true;

      const url = new URL("https://ickandmortyapi.com/api/character");
      url.searchParams.append("page", page);
      fetch(url)
        .then((res) => res.json())
        .catch((err) => {
          throw new Error("Ошибка при выполнении запроса: " + err.message);
        })
        .then((data) => {
          setTimeout(() => {
            this.input.disabled = false;
            this.select.disabled = false;
            const ul = document.createElement("ul");
            this.div2.innerHTML = "";
            data.results.forEach((result) => {
              const li = document.createElement("li");
              li.textContent = result.name;
              ul.appendChild(li);
            });
            this.div2.appendChild(ul);
          }, 3000);
        });
    });
  }
}

const newList = new List(5).create();
