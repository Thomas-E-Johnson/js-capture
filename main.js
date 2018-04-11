const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation(); stop bubbling!!
  // console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false, // true= down false= up
  once: true // Only run the eventListener once
}));

button.addEventListener('click', () => {
  console.log('Click!!!');
}, {once: true});
