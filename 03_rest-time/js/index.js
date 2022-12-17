const results = document.querySelector("#result");
// console.log(results);
const year = 1000 * 60 * 60 * 24 * 365;
const month = 1000 * 60 * 60 * 24 * 30;
const day = 1000 * 60 * 60 * 24;
const hour = 1000 * 60 * 60;
const minute = 1000 * 60;
const second = 1000;

const intervalID = setInterval(restTime, 1000, "2050-06-27");
console.log("ok");

function restTime(dateValue) {
  const finalDate = new Date(`${dateValue}`);
  const today = new Date();
  let rest;
  const diffMiliseconds = Math.abs(finalDate - today);
  const years = Math.floor(diffMiliseconds / year);

  rest = diffMiliseconds % year;
  const months = Math.floor(rest / month);

  rest = diffMiliseconds % month;
  const days = Math.floor(rest / day);

  rest = diffMiliseconds % day;
  const hours = Math.floor(rest / hour);

  rest = diffMiliseconds % hour;
  const minutes = Math.floor(rest / minute);

  rest = diffMiliseconds % minute;
  const seconds = Math.floor(rest / second);

  results.innerText = `${years}: ${months}: ${days}: ${hours}: ${minutes}: ${seconds}`;
}

// 27: 6: 3: 4: 28: 18
