// 1920*1080

init();

// const bag = document.getElementById('');
const situation = document.getElementById('situation');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const healthLabel = document.getElementById('health');
const sleepLabel = document.getElementById('sleep');
const bulletsLabel = document.getElementById('bullets');
const mindLabel = document.getElementById('mind');
const mainImage = document.querySelector('.main-image');
const optionsBlock = document.querySelector('.options-block');

let textRow = 1;

situation.textContent = getEventCaption();

function setStateToView({health, mind, sleep, bullets}){
  healthLabel.textContent = health;
  mindLabel.textContent = mind;
  sleepLabel.textContent = sleep;
  bulletsLabel.textContent = bullets;
}

setStateToView(getStateToView(getCurrentState()));

mainImage.src = `./img/${getPicture()}`;

getOptions().forEach(element => {
  let index = getOptions().indexOf(element);
  document.getElementById(`option${index+1}`).textContent = element.caption;
});

function setEverything() {
  situation.textContent = getEventCaption();
  setStateToView(getStateToView(getCurrentState()));
  getOptions().forEach(element => {
    let index = getOptions().indexOf(element);
    document.getElementById(`option${index+1}`).textContent = element.caption;
  });
  mainImage.src = `./img/${getPicture()}`;
}

optionsBlock.addEventListener('click', (e) => {
  if (e.target == option1 || e.target == document.querySelector('.o1')) {
    console.log('a');
  } else if (e.target == option2 || e.target == document.querySelector('.o2')) {
    console.log('b');
  } else if (e.target == option3 || e.target == document.querySelector('.o3')) {
    console.log('c');
  }
})



console.log(getEventCaption());
console.log(getPicture());



