// DISPLAY OUTPUT
function displayOutput(type, data) {
  const output = document.getElementById(type);
  output.innerHTML = data;
}

// UPDATE OUTPUT
function updateOutput(type, dataFunction, rate) {
  displayOutput(type, dataFunction());
  setInterval(function () {
    displayOutput(type, dataFunction());
  }, rate);
}

// CALCULATE USER DATA
// date
const timeOfPageLoad = new Date();
const year = timeOfPageLoad.getFullYear();
const month = timeOfPageLoad.getMonth() + 1;
const day = timeOfPageLoad.getDate();
const date = year + '/' + month + '/' + day;
displayOutput('date', date);

// time
function getTime() {
  const now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }

  const time = hours + ':' + minutes + ':' + seconds;
  return time;
}
updateOutput('time', getTime, 1000);

// time-passed
function getTimePassed() {
  const now = new Date();
  const elapsedTime = new Date(now - timeOfPageLoad);
  let seconds = elapsedTime.getSeconds();
  let minutes = elapsedTime.getMinutes();
  let hours = elapsedTime.getHours() - 1;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (hours < 10) {
    hours = '0' + hours;
  }
  const timePassed = hours + ':' + minutes + ':' + seconds;
  return timePassed;
}
updateOutput('time-passed', getTimePassed, 1000);

// clicks
let clicks = 0;
function displayClicks() {
  clicks += 1;
  displayOutput('clicks', clicks);
}
document.addEventListener('click', displayClicks);

// mouse
let mouseX = 0;
let mouseY = 0;
function displayMousePosition(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;

  displayOutput('mouse', mouseX + '|' + mouseY);
}
document.addEventListener('mousemove', displayMousePosition);

// touch
let touchX = 0;
let touchY = 0;
function displayTouchPosition(e) {
  touchX = e.touches[0].clientX;
  touchY = e.touches[0].clientY;

  displayOutput('touch', touchX + '|' + touchY);
}
document.addEventListener('touchmove', displayTouchPosition);
document.addEventListener('touchstart', displayTouchPosition);

// viewport
function displayViewportSize() {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  displayOutput('viewport', vw + '|' + vh);
}

displayViewportSize();
window.addEventListener('resize', displayViewportSize);

// user-agent
const userAgent = window.navigator.userAgent;
displayOutput('user-agent', userAgent);

// scroll-distance
let scrollDistance = 0;
function displayScrollDistance(e) {
  scrollDistance += e.deltaY;
  displayOutput('scroll-distance', scrollDistance);
}
document.addEventListener('wheel', displayScrollDistance);

// ip information (ip / country / provider)
function fetchIpInformation() {
  let apiKey = '37b0f7b36ff347928f4f36bcab20edbc';
  // Make the request
  fetch('https://api.ipgeolocation.io/ipgeo?apiKey=' + apiKey)
    // Extract JSON body content from HTTP response
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const ipAddress = data.ip;
      const country = data.country_code2;
      const internetProvider = data.organization;
      displayOutput('ip-address', ipAddress);
      displayOutput('country', country);
      displayOutput('internet-provider', internetProvider);
    });
}

fetchIpInformation();

// location / weather
function getLocation() {
  displayOutput('city', 'loading...');
  displayOutput('weather', 'loading...');
  if (navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(getLocationAndFetchWeather);
  } else {
    x.innerHTML = 'Geolocation is not supported by this browser.';
  }
}

function getLocationAndFetchWeather(position) {
  // get location data
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // fetch weather and city with location data
  fetchWeatherAndCity(latitude, longitude);
}

// fetch weather
const apiKey = '7d54d8564d014993ada161414211907';
function fetchWeatherAndCity(latitude, longitude) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .catch(function (error) {
      console.log(error);
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const city = data.location.name;
      const weatherCondition = data.current.condition.text;
      console.log(weatherCondition);
      const weatherTemperature = data.current.temp_c;
      const weatherPrecipitation = data.current.precip_mm;
      displayOutput('city', city);
      displayOutput(
        'weather',
        weatherTemperature + '°C' + '|' + weatherCondition
      );
    });
}

// add click listener to
// allow location button
const getLocationButton = document.getElementById('getLocation');
getLocationButton.addEventListener('click', getLocation);
