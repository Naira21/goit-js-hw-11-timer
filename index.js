const refs = {
  // bodyRender: document.querySelector('#timer-1');
  sec: document.querySelector([data - value="secs"]),
  min: document.querySelector([data - value="mins"]),
  hour: document.querySelector([data - value="hours"]),
  day: document.querySelector([data - value="days"]),
}

// class CountdownTimer{
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//   }
// }

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});

const startDate = CountdownTimer.targetDate;

function calc() {

  let time = startDate - Date.now;
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  refs.sec.textContent = secs;
  refs.min.textContent = mins;
  refs.hour.textContent = hours;
  refs.day.textContent = days;

  console.log(time);
};

let time = startDate - Date.now;




//Реализация задачи


let id = null;

function timerStart() {
  id = setInterval(calc, 1000);
  setInterval(calc, 1000);
};

function timerStop() {
  clearInterval(id);
}
