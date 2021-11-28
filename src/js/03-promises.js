function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return new Promise((resolve) => {
      setTimeout(() => {
        
      },delay)
    })
  } else {
    // Reject
  }
}

const delay = document.querySelector("input[name=delay]");
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount');
const btn = document.querySelector("button[type=submit]");

btn.addEventListener("click", () => {
  for (let i = 0; i < amount.value; i++){
    createPromise(i, delay.value)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
})

