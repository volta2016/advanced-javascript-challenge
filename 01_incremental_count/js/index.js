// Escribir una función clousure que
// aumente un contador en 1 cada vez que la función se llame

function generateCounterPlus(intialNumber = 0) {
  return intialNumber + 1;
}

generateCounterPlus(2);
console.log(generateCounterPlus(2));

//recordemos que los closures son funciones que se retornan a partir
//de otra función

function generateCounter(value) {
  return () => (value += 1);
}

const counter = generateCounter(2);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
