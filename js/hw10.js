"use strict";

class List {
  constructor() {
    this.form = document.createElement("form");
    this.select = new Select(pages(5));
    this.input = document.createElement("input");
    this.div2 = document.createElement("div");
  }
  createForm() {
    this.form.appendChild(this.select.element);
    this.input.type = "submit";
    this.form.appendChild(this.input);
  }

  render() {
    document.body.appendChild(this.form);
    this.select.render();
  }
  dataFromAPI() {
    this.form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const uls = document.querySelector("ul"); ///уточнить момент по ul
      if (uls !== null) {
        uls.remove();
      }

      const page = this.select.selectedValue;
      this.input.disabled = true;
      this.select.element.disabled = true;

      const url = new URL("https://rickandmortyapi.com/api/character");
      url.searchParams.append("page", page);

      try {
        await wait(3000);
        const ul = document.createElement("ul");
        this.div2.innerHTML = "";
        document.body.appendChild(ul);

        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.error);
        }
        let data = await response.json();

        data.results.forEach((result) => {
          const li = document.createElement("li");
          li.textContent = result.name;
          ul.appendChild(li);
        });
        this.div2.appendChild(ul);
      } catch (e) {
        console.error("ERROR");
      } finally {
        this.input.disabled = false;
        this.select.element.disabled = false;
        document.body.appendChild(this.div2);
      }
    });
  }
}

class Select {
  constructor(elements) {
    this.elements = elements;
    this.element = document.createElement("select");
    this.selectedValue = elements[0].value;
    console.log(typeof this.selectedValue);
  }
  render() {
    for (const element of this.elements) {
      const option = document.createElement("option");
      option.textContent = element.title;
      option.value = element.value;
      this.element.appendChild(option);
    }
    this.element.addEventListener("change", (event) => {
      this.selectedValue = +event.target.value;
      // console.log(typeof this.selectedValue );
    });
  }
}

const list = new List();
list.createForm();
list.render();
list.dataFromAPI();

///////////////////////////////////////////////////////////functions
function wait(ms) {
  return new Promise((r) => setTimeout(() => r(), ms));
}

function pages(qtty) {
  const arr = [];
  for (let i = 0; i < qtty; i++) {
    const obj = { title: `Page ${i+1}`, value: i };
    arr.push(obj);
  }
  return arr;
}

///////////////////////////////////////////////////////////functions call
