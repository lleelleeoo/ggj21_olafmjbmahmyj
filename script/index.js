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

getOptions().forEach((element, id) => {
  document.getElementById(`option${id+1}`).textContent = element.caption;
  document.querySelector(`.o${id+1}`).onclick = () => {
    processAction(element.action);
    setEverything();
  }
  console.log(element);
});

function setEverything() {
  situation.textContent = getEventCaption();
  setStateToView(getStateToView(getCurrentState()));
  getOptions().forEach((element, id) => {
    document.getElementById(`option${id+1}`).textContent = element.caption;
    document.querySelector(`.o${id+1}`).onclick = () => {
      processAction(element.action);
      setEverything();
    }
  });
  mainImage.src = `./img/${getPicture()}`;
}


console.log(getEventCaption());
// console.log(processAction());



