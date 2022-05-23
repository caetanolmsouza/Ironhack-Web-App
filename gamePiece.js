class GamePiece {
  constructor(position, className) {
    this.position = position;
    this.newPosition = null;
    this.className = className;
  }

  show() {
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

class Target extends GamePiece {}
