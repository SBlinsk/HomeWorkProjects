function formtwo() {
  const form = document.createElement("form");
  const labelEmail = document.createElement("label");
  const labelPassword = document.createElement("label");
  const inputTextEmail = document.createElement("input");
  const inputTextPassw = document.createElement("input");
  const inputSubmit = document.createElement("input");
  const error = document.createElement("span");
  const erorEmail = document.createElement("span");
  const passError = document.createElement("span");
  const success = document.createElement("span");

  // REVIEW: Не обязательно использовать setAttribute.
  // Можно прощеЖ inputTextEmail.type = "text";
  // Это касается и всего остального.
  inputTextEmail.type = "text";
  inputTextEmail.value = "";
  inputTextPassw.type = "password";
  inputTextPassw.value = "";
  inputSubmit.type = "submit";
  inputTextEmail.name = "email";
  inputTextEmail.autocomplete = "username";
  inputTextPassw.name = "password";
  inputTextPassw.autocomplete = "current-password";
  labelEmail.htmlFor = "email";
  labelPassword.htmlFor = "password";

  success.textContent = "Succes";
  erorEmail.textContent = "Your email is incorrect";
  labelEmail.textContent = "E-mail";
  labelPassword.textContent = "Password";
  error.textContent = "Error, you havent fill any info";
  passError.textContent = "Password is incorrectr";

  document.body.appendChild(form);
  form.appendChild(labelEmail);
  labelEmail.appendChild(inputTextEmail);

  form.appendChild(labelPassword);
  labelPassword.appendChild(inputTextPassw);
  form.appendChild(inputSubmit);

  ////////////////////////////////////////////////////////////////

  const emailValidation = function emailValidation(emailvalue) {
    if (emailvalue && emailvalue.includes("@") && emailvalue.includes(".")) {
      return true;
    } else {
      erorEmail.remove();
      form.appendChild(erorEmail);
      return false;
    }
  };

  const passValidation = function passValidation(passValue) {
    let symbolIsPresent = false;

    for (let i = 0; i < passValue.length; i++) {
      if (
        passValue[i] === "@" ||
        passValue[i] === "$" ||
        passValue[i] === "#" ||
        passValue[i] === "!" ||
        passValue[i] === "?" ||
        passValue[i] === "&"
      ) {
        symbolIsPresent = true;
        break;
      }
    }
    //Проверка на цифры
    let numberIsPresent = false;
    for (let i = 0; i < passValue.length; i++) {
      if (!isNaN(passValue[i])) {
        // проверка, является ли символ цифрой
        numberIsPresent = true;
        break;
      }
    }

    if (symbolIsPresent && numberIsPresent && passValue.length > 7) {
      return true;
    } else {
      form.appendChild(passError);
      // return false;
    }
  };

  const validation = function validation(emailValidation, passValidation) {
    if (emailValidation === true && passValidation === true) {
      const email = form.elements.email.value;
      const password = form.elements.password.value;
      console.log(JSON.stringify({ email, password }));
    } else if (emailValidation !== true && passValidation === true) {
      return form.appendChild(erorEmail);
    } else if (emailValidation === true && passValidation !== true) {
      return form.appendChild(passError);
    } else if (emailValidation !== true && passValidation !== true) {
      form.appendChild(error);
    }
  };

  form.addEventListener("submit", () => {
    emailValidation(email);
    passValidation(password);
    validation(emailValidation, passValidation);
  });
}

formtwo();


const firs =  function first(){
    // dcndsjkcsdj;
}

function second(firs){dcsdc}