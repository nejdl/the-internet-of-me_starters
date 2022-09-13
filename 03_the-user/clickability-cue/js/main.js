// LOGGING
console.log('hi');

// VARIABLES: CONST / LET
const message = 'hello';
// console.log(message);

let counter = 0;
// console.log(counter);

// counter = counter + 1;
// console.log(counter);

// DATA TYPES
const number = 1;
const string = '1';
const boolean = false;
let undefinedVariable;
// console.log(number);
// console.log(typeof(number));

// GET ELEMENT BY ID
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const clickingCounter = document.getElementById('clickingCounter');
// console.log(button1);

// CHANGE CSS / CLASS WITH JS
// text1.style.color = 'red';
// text1.classList.add('hidden');

// CLICK EVENT LISTENER
// when you click on button-1
button1.addEventListener('click', function () {
  alert('You clicked me!');

  // increment counter and output new value
  counter += 1;
  clickingCounter.innerHTML = counter;
});

// when you click on button-2
button2.addEventListener('click', function () {
  // toggle class that hides text-1
  text1.classList.toggle('hidden');

  // increment counter and output new value
  counter += 1;
  clickingCounter.innerHTML = counter;
});

// when you click on button-3
button3.addEventListener('click', function () {
  // set color of text-2 to red
  setTimeout(function () {
    console.log('Finally here!');
    text2.style.color = 'red';
  }, 2000);

  // increment counter and output new value
  counter += 1;
  clickingCounter.innerHTML = counter;
});

// MOUSEMOVE EVENT LISTENER
const body = document.body;
const circle = document.getElementById('circle');

body.addEventListener('mousemove', function (e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  // console.log(mouseX, mouseY);

  circle.style.left = mouseX + 'px';
  circle.style.top = mouseY + 'px';
});

// TOUCHMOVE EVENT LISTENER
body.addEventListener('touchmove', function () {
  const touch = e.touches[0];
  const touchX = e.touch.clientX;
  const touchY = e.touch.clientY;
  // console.log(touchX, touchY);

  circle.style.left = mouseX + 'px';
  circle.style.top = mouseY + 'px';
});
