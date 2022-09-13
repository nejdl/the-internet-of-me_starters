// FUNCTIONS
// // function
// function logHello() {
//   console.log('Hello World!');
// }

// logHello();

// // function with parameter
// function logSomething(params) {
//   console.log(params);
// }

// logSomething('Ciao World!');

// SATISFATION COUNTER
// get buttons and output
const buttons = document.getElementsByTagName('button');
const plusButton = buttons[0];
const minusButton = buttons[1];
const output = document.getElementById('satisfaction-output');

// define satisfaction scale as array
const scale = [
  'very dissatisfied',
  'dissatisfied',
  'somewhat dissatisfied',
  'neutral',
  'somewhat satisfied',
  'satisfied',
  'very satisfied',
];
// set satisfaction counter to neutral = scale[3]
let counter = 3;

// add event listener to buttons
for (let i = 0; i < buttons.length; i++) {
  // for (button of buttons) {
  const button = buttons[i];

  // on each click, update the satisfation counter
  button.addEventListener('click', updateSatisfaction);
}

function updateSatisfaction(e) {
  // get the value from the clicked button
  const buttonValue = e.target.value;

  // UPDATE COUNTER / OUTPUT
  // if the value equals to +
  if (buttonValue === '+') {
    // add to counter
    counter += 1;
    output.innerHTML = scale[counter];
    // else it equals to -
  } else if (buttonValue === '-') {
    // substract from counter
    counter -= 1;
    output.innerHTML = scale[counter];
  }

  console.log(counter);

  // ENABLE / DISABLE BUTTONS
  if (counter === scale.length - 1) {
    plusButton.disabled = true;
    minusButton.disabled = false;
  } else if (counter === 0) {
    plusButton.disabled = false;
    minusButton.disabled = true;
  } else {
    plusButton.disabled = false;
    minusButton.disabled = false;
  }
}
