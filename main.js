var $car = document.querySelector('img');
document.addEventListener('keydown', handleKeydown);
var xAxis = 0;
var yAxis = 0;
var carIgnition = false;
var interval = null;

function handleKeydown(event) {
  if (event.key === 'ArrowDown') {
    turnCarDown();
    if (carIgnition === true) {
      clearInterval(interval);
      interval = setInterval(moveCarDown, 16);
    }
  } else if (event.key === 'ArrowLeft') {
    turnCarLeft();
    if (carIgnition === true) {
      clearInterval(interval);
      interval = setInterval(moveCarLeft, 16);
    }
  } else if (event.key === 'ArrowUp') {
    turnCarUp();
    if (carIgnition === true) {
      clearInterval(interval);
      interval = setInterval(moveCarUp, 16);
    }
  } else if (event.key === 'ArrowRight') {
    resetDirection();
    if (carIgnition === true) {
      clearInterval(interval);
      interval = setInterval(moveCarRight, 16);
    }
  } else if (event.key === ' ') {
    if (!carIgnition) {
      interval = setInterval(moveCarRight, 16);
      carIgnition = true;
    } else {
      clearInterval(interval);
      carIgnition = false;
    }
  }
}

function turnCarDown() {
  $car.className = 'face-down';
}

function resetDirection() {
  $car.className = 'face-right';
}

function turnCarLeft() {
  $car.className = 'face-back';
}

function turnCarUp() {
  $car.className = 'face-up';
}

function moveCarRight() {
  $car.style.left = xAxis + 'px';
  xAxis += 3;
}

function moveCarLeft() {
  $car.style.left = xAxis + 'px';
  xAxis -= 3;
}

function moveCarDown() {
  $car.style.top = yAxis + 'px';
  yAxis += 3;
}

function moveCarUp() {
  $car.style.top = yAxis + 'px';
  yAxis -= 3;
}
