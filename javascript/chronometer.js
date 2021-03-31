class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0 ;
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
      console.log(this.currentTime)
      // callback()
    }, 1000)
  }
  getMinutes() {
   

    if(this.currentTime > 60){
    return Math.floor(this.currentTime / 60)
    }else if(this.intervalId == 0){
      return 0
    }
    
  }
  getSeconds() {
    if( this.intervalId== 0){
      return 0
    }

    if(this.currentTime > 60){
      return this.currentTime % 60
  } else {
    return this.currentTime
  }
  
  
}
  twoDigitsNumber() {
    // ... your code goes here
    if(this.currentTime < 10){
      return "0"+this.currentTime
    }else{
      return this.currentTime
    }


  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
    
   }

  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
  }
}

