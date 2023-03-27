const form = createForm();
document.body.appendChild(form);

function emailValidation(email) {
  return (
    typeof email === "string" && email.includes("@") && email.includes(".")
  );
}

const requiredSymbols = ["@", "$", "#", "!", "?", "&"];

function passValidation(passValue) {
  if (typeof passValue !== "string" || passValue.length < 7) {
    return false;
  }

  //Проверка на символы
  let symbolIsPresent = false;

  for (const char of passValue) {
    if (requiredSymbols.includes(char)) {
      symbolIsPresent = true;
      break;
    }
  }

  //Проверка на цифры
  let numberIsPresent = false;
  for (const char of passValue) {
    if (!Number.isNaN(char)) {
      // проверка, является ли символ цифрой
      numberIsPresent = true;
      break;
    }
  }

  return symbolIsPresent && numberIsPresent;
}

function createInput(props) {
  const input = document.createElement("input");

  for (const [key, value] of Object.entries(props)) {
    input[key] = value;
  }

  return input;
}

function createForm() {
  const form = document.createElement("form");

  const labelEmail = document.createElement("label");
  const labelPassword = document.createElement("label");

  // const inputTextEmail = document.createElement("input");
  // inputTextEmail.type = "text";
  // inputTextEmail.value = "";
  // inputTextEmail.name = "email";
  // inputTextEmail.autocomplete = "username";

  const inputTextEmail = createInput({
    type: "text",
    name: "email",
    autocomplete: "username",
  });
  const inputTextPassw = createInput({
    type: "password",
    name: "password",
    autocomplete: "current-password",
  });

  // const inputTextPassw = document.createElement("input");
  // inputTextPassw.type = "password";
  // inputTextPassw.value = "";
  // inputTextPassw.name = "password";
  // inputTextPassw.autocomplete = "current-password";

  const inputSubmit = document.createElement("input");
  const error = document.createElement("span");
  const erorEmail = document.createElement("span");
  const passError = document.createElement("span");
  const success = document.createElement("span");

  // REVIEW: Не обязательно использовать setAttribute.
  // Можно прощеЖ inputTextEmail.type = "text";
  // Это касается и всего остального.

  inputSubmit.type = "submit";

  labelEmail.htmlFor = "email";
  labelPassword.htmlFor = "password";

  success.textContent = "Succes";
  erorEmail.textContent = "Your email is incorrect";
  labelEmail.textContent = "E-mail";
  labelPassword.textContent = "Password";
  error.textContent = "Error, you havent fill any info";
  passError.textContent = "Password is incorrectr";

  inputTextEmail.value = "test@test.com";
  inputTextPassw.value = "qwerty123#$%";

  form.appendChild(labelEmail);
  labelEmail.appendChild(inputTextEmail);

  form.appendChild(labelPassword);
  labelPassword.appendChild(inputTextPassw);
  form.appendChild(inputSubmit);
  ////////////////////////////////////////////////////////////////

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isEmailValid = emailValidation(inputTextEmail.value);
    const isPasswordValid = passValidation(inputTextPassw.value);

    const errorElements = form.querySelectorAll("span");
    errorElements.forEach((el) => el.parentNode.removeChild(el));

    if (isEmailValid && isPasswordValid) {
      const email = form.elements.email.value;
      const password = form.elements.password.value;
      console.log(JSON.stringify({ email, password }));
      return;
    }

    if (!isEmailValid) {
      form.appendChild(erorEmail);
      return;
    }

    if (!isPasswordValid) {
      form.appendChild(passError);
    }
  });

  return form;
}
