const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  let sec = Number(printSeconds());
  let min = Number(printMinutes());
}

function printMinutes() {
  // ... your code goes here
  
  minDec.innerText = Math.floor(chronometer.getMinutes() / 10);
  minUni.innerText = chronometer.getMinutes() % 10;
  return chronometer.currentTime
}

function printSeconds() {
  secDec.innerText = Math.floor(chronometer.getSeconds() / 10);
  secUni.innerText = chronometer.getSeconds() % 10;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let list = document.createElement("li");
  list.innerHTML = chronometer.splitClick();

  this.splits.appendChild(list);
}

function clearSplits() {
  let list = document.querySelectorAll("#splits li");
  
  list.forEach((list)=>{
    this.splits.removeChild(list)
  })
  ;
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  this.printSplit();

  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  chronometer.resetClick()
  
  this.clearSplits();

  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  // ... your code goes here
  if (btnLeft.innerText == "START") {
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
    btnLeft.classList.toggle(`start`);
    btnLeft.classList.toggle(`stop`);
    btnRight.classList.toggle(`reset`);
    btnRight.classList.toggle(`split`);
    console.log("started");
    chronometer.startClick(printTime);
  } else if (btnLeft.innerText == "STOP") {
    btnLeft.innerText = "START";
    btnRight.innerText = "RESET";
    btnLeft.classList.toggle(`start`);
    btnLeft.classList.toggle(`stop`);
    btnRight.classList.toggle(`reset`);
    btnRight.classList.toggle(`split`);
    console.log("stoped");
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
  if (btnRight.innerText == "SPLIT") {
    this.setSplitBtn();
  } else {
    this.setResetBtn();
  }
});
all = this.printTime()
console.log(all)