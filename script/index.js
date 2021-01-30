// 1920*1080

// const bag = document.getElementById('');
const situation = document.getElementById('situation');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const health = document.getElementById('health');
const sleep = document.getElementById('sleep');
const bullets = document.getElementById('bullets');
const mind = document.getElementById('mind');

let textRow = 1;

const state = {
  health: 100,
  mind: 100,
  sleep: 100,
  bullets: 6,
}

const displayState = {
  1: 'норм',
  2: 'не норм',
  3: 'плохо',
}

let healthState = displayState[1];
let mindState = displayState[1];
let sleepState = displayState[1];
let bulletsState = 6;

situation.textContent = Quest[textRow][0];
for (let i = 1; i < 4; i++) {
  let optionPlace = i + 1;
  document.getElementById(`option${i}`).textContent = Quest[textRow][optionPlace];
}



