const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');
let tomato1 = document.getElementById('tomato1');
let tomato2 = document.getElementById('tomato2');

playButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);
// tomato1.addEventListener('click', grow);

let startTime;
let elapsedTime = 0;
let timerInterval;
let growInterval;
let scale = 1;

// function grow(){
//   let width = parseInt(tomato1.getAttribute("width"));
//   let height = parseInt(tomato1.getAttribute("height"));
//   width += 10;
//   height += 10;
//   tomato1.setAttribute("width", width);
//   tomato1.setAttribute("height", height);
// }

function grow() {
  scale += 0.1;
  tomato1.style.transform = `scale(${scale})`;
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
  growInterval = setInterval(grow, 100);
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
  tomato1.style.transform = `scale(1)`;
}

