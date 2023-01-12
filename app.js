document.addEventListener("click", function(event) {
  console.log("Clicked at: " + event.clientX + ", " + event.clientY);
});


const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

const tomato1 = document.getElementById('tomato1');
const tomato2 = document.getElementById('tomato2');
const tomato3 = document.getElementById('tomato3');
const tomato4 = document.getElementById('tomato4');
const tomato5 = document.getElementById('tomato5');
const tomato6 = document.getElementById('tomato6');
const tomato7 = document.getElementById('tomato7');
const tomato8 = document.getElementById('tomato8');
const tomato9 = document.getElementById('tomato9');
const tomato10 = document.getElementById('tomato10');
const tomato11 = document.getElementById('tomato11');
const tomato12 = document.getElementById('tomato12');
const tomato13 = document.getElementById('tomato13');
const tomato14 = document.getElementById('tomato14');
const tomato15 = document.getElementById('tomato15');
const tomato16 = document.getElementById('tomato16');

let tomatoes = [tomato1, tomato2, tomato3, tomato4, tomato5, tomato6, tomato7, tomato8, tomato9, tomato10, tomato11, tomato12, tomato13, tomato14, tomato15, tomato16];

playButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);
// tomato1.addEventListener('click', grow);

let startTime;
let elapsedTime = 0;
let timerInterval;
let growInterval;
let scale = 1;
let counter = 0;

// function grow(){
//   let width = parseInt(tomato1.getAttribute("width"));
//   let height = parseInt(tomato1.getAttribute("height"));
//   width += 10;
//   height += 10;
//   tomato1.setAttribute("width", width);
//   tomato1.setAttribute("height", height);
// }

function grow() {
  if (scale <= 8.0) {
    scale += 0.1;
  } else {
    scale = 1;
    counter++;
  }

  if (counter >= tomatoes.length) {
    counter = 0;
  }

  tomatoes[counter].style.transform = `scale(${scale})`;
}

//Convert time Hours/Minutes/Seconds format
function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, '0');
  let formattedSS = ss.toString().padStart(2, '0');
  let formattedMS = ms.toString().padStart(2, '0');

  return `${hh}:${mm}:${ss}:${ms}`;
}

function showButton(buttonKey) {
  const buttonToShow = buttonKey === 'play' ? playButton : pauseButton;
  const buttonToHide = buttonKey === 'play' ? pauseButton : playButton;
  buttonToShow.style.display = 'block';
  buttonToHide.style.display = 'none';
}

function print(txt) {
  document.getElementById('display').innerHTML = txt;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime))
  }, 10);
  // growInterval = setInterval(grow, 18.75*1000); should be the 25 min increment per tomato
  growInterval = setInterval(grow, 10);

  showButton('pause');
}

function pause() {
  clearInterval(timerInterval);
  clearInterval(growInterval);
  showButton('play');
}

function reset() {
  clearInterval(timerInterval);
  clearInterval(growInterval);
  print('00:00:00');
  elapsedTime = 0;
  scale = 1;
  counter = 0;
  showButton('play');
  resetTomatoSize();
}

function resetTomatoSize() {
  // let width = parseInt(tomato1.getAttribute("width"));
  // let height = parseInt(tomato1.getAttribute("height"));
  // width = 10;
  // height = 10;
  // tomato1.setAttribute("width", width);
  // tomato1.setAttribute("height", height);
  tomatoes.forEach(function(tomato) {
    tomato.style.transform = `scale(1)`;
  });
}

