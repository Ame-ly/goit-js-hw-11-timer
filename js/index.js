import  refs  from './refs.js';
// let intervalId = null;

class CountdownTimer {
  intervalId = null;

  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    // this.onTick = onTick;
    this.start();
  }

  start() {
    Date.now();
    this.intervalId = setInterval(() => {
      const deltaTime = this.targetDate - Date.now();
      const time = this.getTimeComponents(deltaTime);

      this.updateClock(time);
    }, 1000);
  }
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    //  return `${days}:${hours}:${mins}:${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
  stop() {
    clearInterval(intervalId);
  }

  updateClock({ days, hours, mins, secs }) {
    const sumTime = Number(days) + Number(hours) + Number(mins) + Number(secs);

    if (sumTime <= 0) {
      days = hours = mins = secs = 0;
    }
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
    // console.log(`${days}:${hours}:${mins}:${secs}`);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 25, 2021'),
  // onTick: updateClock,
});

// function updateClock({ days, hours, mins, secs }) {
//   const sumTime = Number(days) + Number(hours) + Number(mins) + Number(secs);

//   if (sumTime <= 0) {
//     days = hours = mins = secs = 0;
//   }
//   refs.days.textContent = days;
//   refs.hours.textContent = hours;
//   refs.mins.textContent = mins;
//   refs.secs.textContent = secs;
//   // console.log(`${days}:${hours}:${mins}:${secs}`);
// }

// timer.start();


