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
}

class Select extends List {
  constructor(qttyOfPages) {
    super(qttyOfPages);
  }

  create() {
    document.body.appendChild(this.div);
    document.body.appendChild(this.div2);
    this.form.appendChild(this.select);
    this.form.appendChild(this.input);
    this.div.appendChild(this.form);
    this.input.setAttribute("type", "submit");
    this.input.setAttribute("value", "GET");

    for (let i = 1; i <= this.qttyOfPages; i++) {
      const option = document.createElement("option");
      option.textContent = `Страница ${i}`;
      option.dataset.num = `${i}`;

      this.select.appendChild(option);
    }
    this.form.appendChild(this.input);
  }

  dataFromAPI() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      const uls = document.querySelector("ul"); ///уточнить момент по ul
      if (uls !== null) {
        uls.remove();
      }

      const page = this.select.options[this.select.selectedIndex].dataset.num; //нашел это решение,хотелось бы понять как оно работает, не додумался)
      this.input.disabled = true;
      this.select.disabled = true;

      const url = new URL("https://rickandmortyapi.com/api/character");
      url.searchParams.append("page", page);

      function wait(ms) {
        return new Promise((r) => setTimeout(() => r(), ms));
      }

      const receiveData = async () => {
        try {
          await wait(3000);
          const ul = document.createElement("ul");
          this.div2.innerHTML = "";
          document.body.appendChild(ul);

          let response = await fetch(url);
          let data = await response.json();

          data.results.forEach((result) => {
            const li = document.createElement("li");
            li.textContent = result.name;
            ul.appendChild(li);
          });
          this.div2.appendChild(ul);
        } catch (e) {
          throw new Error();
        } finally {
          this.input.disabled = false;
          this.select.disabled = false;
        }
      };
      receiveData();
    });
  }
}

const newSelect = new Select(5);
newSelect.create();
newSelect.dataFromAPI();
//
