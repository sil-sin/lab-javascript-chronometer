class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(printTime) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTime();
    }, 1000);
  }
  getMinutes() {
    let currentTimeMin = Math.floor(this.currentTime / 60);
    return currentTimeMin;
  }
  getSeconds() {
    let currentTimeSec = this.currentTime % 60;
    return currentTimeSec;
    // if (this.currentTime == 0) {
    //   return 0;
    // }

    // if (this.currentTime >= 60) {
    //   return this.currentTime % 60;
    // } else {
    //   return this.currentTime;
    // }
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    let twoDigits = ("0" + number).slice(-2);
    return twoDigits;
    // if (number < 10) {
    //   return "0" + number;
    // } else {
    //   return `${number}`;
    // }
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
    let min = this.getMinutes();
    let sec = this.getSeconds();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
  }
}
