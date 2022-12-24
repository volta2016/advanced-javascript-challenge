// Escribir un Proxy que controle el acceso a las propiedades
// de un objeto que contenga la información una operación matemática.

const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");

const add = document.getElementById("add");
const rest = document.getElementById("rest");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const result = document.getElementById("result");

//listener
add.addEventListener("click", executeOperation);
rest.addEventListener("click", executeOperation);
multiply.addEventListener("click", executeOperation);
divide.addEventListener("click", executeOperation);

const template = { value1: null, value2: null, operator: null };

const handler = {
  get: (target, key) => {
    if (key === "value1") {
      return input1.value === "" ? 0 : parseInt(input.value);
    }

    if (key === "value2") {
      return input2.value === "" ? 0 : parseInt(input2.value);
    }
    return target[key];
  },
};

const proxy = new Proxy(template, handler);

function calcuteResult() {
  let total;
  switch (proxy.operator) {
    case "+":
      total = proxy.value1 + proxy.value2;
      break;
    case "*":
      total = proxy.valor1 * proxy.value2;
      break;
    case "-":
      total = proxy.valor1 - proxy.value2;
      break;
    case "/":
      total = proxy.valor1 / proxy.value2;
      break;
  }
  result.innerText = total;
}

function executeOperation(event) {
  proxy.operator = event.target.innerText;
  calcuteResult();
}
