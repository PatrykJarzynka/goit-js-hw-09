function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        resolve({ position, delay })
      }, delay)
    })
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    });
  }
}

const delay = document.querySelector("input[name=delay]");
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount');
const btn = document.querySelector("button[type=submit]");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  for (let i = 1; i <= amount.value; i++){
    console.log(i)
    createPromise(i, delay.value)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay.value = Number(delay.value) + Number(step.value);
  }
})

