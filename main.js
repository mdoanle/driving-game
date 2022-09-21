var $car = document.querySelector('img');
document.addEventListener('keydown', handleKeydown);
var xAxis = 0;

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

document.addEventListener('keydown', vroomVroom);
function vroomVroom(event) {
  if (event.key === 'a') {
    setInterval(moveCarRight, 16);
  }
}

function moveCarRight() {
  $car.style.left = xAxis + 'rem';
  xAxis += 50;
}
