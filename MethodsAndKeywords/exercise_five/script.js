let innerWidth = window.innerWidth;
let position = innerWidth / 2;
document.getElementById("imadiv").style.left = "50%"

function moveRight(){
  if(position < innerWidth) {
  position += 30;
  }
  else{
    position = innerWidth / 2
  }
  document.getElementById("imadiv").style.left = `${position}px`;
}

function moveLeft(){
  if(position > 0) {
  position -= 30;
  }
  else{
    position = innerWidth / 2
  }
  document.getElementById("imadiv").style.left = `${position}px`;
}