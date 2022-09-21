var $car = document.querySelector('img');
document.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
  if (event.key === 'ArrowDown') {
    turnCarDown();
  } else if (event.key === 'ArrowLeft') {
    turnCarLeft();
  } else if (event.key === 'ArrowUp') {
    turnCarUp();
  } else {
    resetDirection();
  }

}

function turnCarDown() {
  $car.className = 'face-down';
}

function resetDirection() {
  $car.className = '';
}

function turnCarLeft() {
  $car.className = 'face-back';
}

function turnCarUp() {
  $car.className = 'face-up';
}
