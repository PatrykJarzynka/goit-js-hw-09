import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    let date = selectedDates[0];
    if (date.getTime() < actuallTime) {
      window.alert('Please choose a date in the future');
      return;
    }
    btn.removeAttribute('disabled');
    newTime = date.getTime();
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const data = document.querySelector('#datetime-picker');
const btn = document.querySelector('button[data-start]');
const actuallTime = options.defaultDate.getTime();
let newTime = 0;
let timerId = null;

let cos = flatpickr(data, options);
btn.setAttribute('disabled', true);
btn.addEventListener('click', () => {
  timerId = setInterval(() => {
    console.log(convertMs(newTime - actuallTime));
    newTime -= 1000;
  }, 1000);
});
