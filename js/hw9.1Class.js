class Input {
  constuctor(props) {
    this.element = document.createElement("input");
    for (const key in props) {
      this.element[key] = props[key];
    }
  }

  get value() {
    return this.element.value;
  }

  isValid() {
    return this.element.value !== "";
  }
}

class ImailInput extends Input {
  constructor() {
    super({ type: "text", placeholder: "Email", name: "email" }); // я не совсем понял как рабоатет super , я думал он ссылается на конструктор родителя,а тут прям мы передаем в него объект как передаем параметр в функуию
  }

  isValid() {
    return (
      typeof this.value === "string" &&
      this.value.includes("@") &&
      this.value.includes(".")
    );
  }
}

class PasswordInput extends Input {
  constructor() {
    super({ type: "password", placeholder: "Password", name: "password" });
  }

  isValid() {
    const requiredSymbols = ["@", "$", "#", "!", "?", "&"];
    if (typeof this.value !== "string" || this.value.length < 7) {
      return false;
    }
    let symbolIsPresent = false;
    for (const char of this.value) {
      if (requiredSymbols.includes(char)) {//Почему именно так, а не char.includes(requiredSymbol)
        symbolIsPresent = true;
        break;
      }
    }
    let numberIsPresent = false;
    for (const char of this.value) {
      if (!Number.isNaN(char)) {
        numberIsPresent = true;
        break;
      }
    }
    return symbolIsPresent && numberIsPresent;
  }
}

class Button {
  constructor({ type, text }) {//Что делает данный синтаксис (я понинмаю, что это деструктуризация по ходу, но как именно она тут работает)
    this.element = document.createElement("button");
    this.element.type = type;
    this.element.textContent = text;
  }
}

class Form {
  constructor() {
    this.form = document.createElement("form");
    this.email = new ImailInput();
    this.password = new PasswordInput();
    this.submitButton = new Button();
  }
  onSubmit(event) {
    event.preventDefault();
    if (this.email.isValid() && this.password.isValid()) {
      console.log("All Good", {
        email: this.email.value,
        password: this.password.value,
      });
    } else {
      console.log("Error");
    }
  }

  render() {
    this.form.appendChild(this.email.element);
    this.form.addEventListener("on submit", (event) => this.onSubmit(event));
    this.form.appendChild(this.password.element);
    this.form.appendChild(this.submitButton.element);
    document.body.appendChild(this.form);
  }
}
const form = new Form();
form.render(); /////зачем запускать render(), если мы запускаем уже ыорму, в которой оно автоматически запускается


//Я заметил тенденцию, что ты как-будто начинаешь с писать код с конца. Ну ты сначала создаешь дочерние классы, которые
//в главном классе Form. Ты это делаешь как-будто знаешь на перед где этот кирипичик будет использоваться
