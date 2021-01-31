// 1920*1080

// const bag = document.getElementById('');
const situation = document.getElementById('situation');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const healthLabel = document.getElementById('health');
const sleepLabel = document.getElementById('sleep');
const bulletsLabel = document.getElementById('bullets');
const mindLabel = document.getElementById('mind');

let textRow = 1;

const state = {
  health: 100,
  mind: 100,
  sleep: 100,
  bullets: 6,
}

situation.textContent = Quest[textRow][0];
for (let i = 1; i < 4; i++) {
  let optionPlace = i + 1;
  document.getElementById(`option${i}`).textContent = Quest[textRow][optionPlace];
}

function setStateToView({health, mind, sleep}, bullets){
  healthLabel.textContent = health;
  mindLabel.textContent = mind;
  sleepLabel.textContent = sleep;
  bulletsLabel.textContent = bullets;
}



