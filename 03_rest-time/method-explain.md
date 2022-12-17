# setInterval()

The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().

## Syntax

setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg0)
setInterval(func, delay, arg0, arg1)
setInterval(func, delay, arg0, arg1, /_ … ,_/ argN)

## func

A function to be executed every delay milliseconds. The first execution happens after delay milliseconds.

## code

An optional syntax allows you to include a string instead of a function, which is compiled and executed every delay milliseconds. This syntax is not recommended for the same reasons that make using eval() a security risk.

## delay Optional

The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code. Defaults to 0 if not specified. See Delay restrictions below for details on the permitted range of delay values.

## arg0, …, argN Optional

Additional arguments which are passed through to the function specified by func once the timer expires.

## Example 1: Basic syntax

The following example demonstrates setInterval()'s basic syntax.

```js
const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
  // Your code here
  // Parameters are purely optional.
  console.log(a);
  console.log(b);
}
```

## Example 2: Alternating two colors

The following example calls the flashtext() function once a second until the Stop button is pressed.

```html
<div id="my_box">
  <h3>Hello World</h3>
</div>
<button id="start">Start</button>
<button id="stop">Stop</button>
```

```css
.go {
  color: green;
}
.stop {
  color: red;
}
```

```js
// variable to store our intervalID
let nIntervId;

function changeColor() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
  }
}

function flashText() {
  const oElem = document.getElementById("my_box");
  oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
```

## Math.abs()

The Math.abs() function returns the absolute value of a number.

```js
function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// expected output: 2

console.log(difference(5, 3));
// expected output: 2

console.log(difference(1.23456, 7.89012));
// expected output: 6.6555599999999995
```

The Math.floor()

function always rounds down and returns the largest integer //less than or equal to a given number.

```js
console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6
```
