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
  1: 'норм',
  2: 'не норм',
  3: 'плохо',
}

let healthState = state[1];
let mindState = state[1];
let sleepState = state[1];
let bulletState = 6;

situation.textContent = Quest[textRow][0];
for (let i = 1; i < 4; i++) {
  let optionPlace = i + 1;
  document.getElementById(`option${i}`).textContent = Quest[textRow][optionPlace];
}



