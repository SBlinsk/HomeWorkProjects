class Input {
  constructor(props) {
    this.element = document.createElement("input");
    for (const key in props) {
      this.element[key] = props[key];
    }
  }

  get value() {
    return this.element.value;
  }

  isValid() {
    return this.value !== "";
  }
}

class EmailInput extends Input {
  constructor() {
    super({ type: "text", placeholder: "Email", name: "email" });
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
      if (requiredSymbols.includes(char)) { //....Почему именно так, а не char.includes(requiredSymbol)
        symbolIsPresent = true;
        break;
      }
    }

    //Проверка на цифры
    let numberIsPresent = false;
    for (const char of this.value) {
      if (!Number.isNaN(char)) {
        // проверка, является ли символ цифрой
        numberIsPresent = true;
        break;
      }
    }

    return symbolIsPresent && numberIsPresent;
  }
}

class Button {
  constructor({ type, text }) { //.......Что делает данный синтаксис 
    this.element = document.createElement("button");
    this.element.type = type;
    this.element.textContent = text;
  }
}

class Form {
  constructor() {
    this.form = document.createElement("form");
    this.email = new EmailInput();
    this.password = new PasswordInput();
    this.submitButton = new Button({ type: "submit", text: "GO!" });
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.email.isValid() && this.password.isValid()) {
      console.log("ALL GOOD!", {
        email: this.email.value,
        password: this.password.value
      });
    } else {
      console.log("ERROR!");
    }
  }

  render() {
    this.form.appendChild(this.email.element);
    // this.form.addEventListener("submit", this.onSubmit.bind(this)); ///......как работает bind(this)
    this.form.addEventListener("submit", (event) => this.onSubmit(event));
    this.form.appendChild(this.password.element);
    this.form.appendChild(this.submitButton.element);

    document.body.appendChild(this.form);
  }
}

const form = new Form();
form.render(); /////зачем запускать render(), если мы запускаем уже ыорму, в которой оно автоматически запускается
