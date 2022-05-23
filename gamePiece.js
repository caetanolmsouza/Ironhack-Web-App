class GamePiece {
  constructor(position, className) {
    this.position = position;
    this.newPosition = null;
    this.className = className;
    this.isAlive = true;
  }

  show() {
    if (!this.isAlive) {
      return;
    }
    // Show the player in the currentPosition
    cells[this.position].classList.add(this.className);
  }
  remove() {
    // Stop showing the player in the currentPosition
    console.log(cells[this.position], this.position);
    cells[this.position].classList.remove(this.className);
  }

  move(increment) {
    this.newPosition = this.position + increment;
    if (this.newPosition < 0) {
      return;
    }
    if (this.newPosition > gridWidth * gridHeight - 1) {
      return;
    }
    this.remove();
    this.position = this.newPosition;

    // Always show last
    this.show();
  }
}

class Target extends GamePiece {
  isColliding(otherGamePiece) {
    // do this and otherGAMEPIECE collide?
    if (this.position === otherGamePiece.position) {
      this.remove();
      this.isAlive = false;
      otherGamePiece.isAlive = false;
    }
  }
}

class Player extends GamePiece {}

class Bullet extends GamePiece {
  nextStep(intervalId) {
    // what does the bullet do each step
    this.move(-15);
    if (this.position < 15) {
      this.remove();
      clearInterval(intervalId);
    }
  }
}
