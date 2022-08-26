class CountdownTimer {
  constructor({targetDate, selector}) {
    this.refs = {
      bodyRender: document.querySelector(selector),
      sec: document.querySelector('[data-value="secs"]'),
      min: document.querySelector('[data-value="mins"]'),
      hour: document.querySelector('[data-value="hours"]'),
      day: document.querySelector('[data-value="days"]'),
    };
    
    this.targetDateGiven = targetDate;
    this.id = null;
  }
  
  calc=()=> {
    let time = this.targetDateGiven - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24)).toString();
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString();
    const secs = Math.floor((time % (1000 * 60)) / 1000).toString();
    this.refs.sec.textContent = secs < 10 ? `0${secs}` : secs;    
    this.refs.min.textContent = mins <10 ? `0${mins}`: mins;
    this.refs.hour.textContent = hours <10 ? `0${hours}`: hours;
    this.refs.day.textContent = days < 10 ? `0${days}` : days;
    return { days, hours, mins, secs };   

  }
  
  timerStart() {
    this.id = setInterval(this.calc, 1000);
  }

}

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 2, 2022'),
});


window.addEventListener("DOMContentLoaded", newTimer.timerStart);
newTimer.timerStart();