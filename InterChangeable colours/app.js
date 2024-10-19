const btns = document.querySelectorAll('.btn');
const body = document.body;
console.log(btns);

// Iterating over all buttons
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const number = btn.value; // Use const for block scope
    changeBackground(number);
  });
});

function changeBackground(number) {
  // Clear existing classes
  body.className = '';

  // Change background based on the number (color)
  switch (number) {
    case 'purple':
      body.classList.add('purple');
      break;
    case 'blue':
      body.classList.add('blue');
      break;
    case 'red':
      body.classList.add('red');
      break;
    case 'green':
      body.classList.add('green');
      break;
    case 'yellow':
      body.classList.add('yellow');
      break;
    case 'teal':
      body.classList.add('teal');
      break;
    default:
      break;
  }
}
