var $car = document.querySelector('img');
document.addEventListener('keydown', handleKeydown);
var xAxis = 0;
var carIgnition = false;
var interval = null;

function handleKeydown(event) {
  if (event.key === 'ArrowDown') {
    turnCarDown();
  } else if (event.key === 'ArrowLeft') {
    turnCarLeft();
  } else if (event.key === 'ArrowUp') {
    turnCarUp();
  } else if (event.key === 'ArrowRight') {
    resetDirection();
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
