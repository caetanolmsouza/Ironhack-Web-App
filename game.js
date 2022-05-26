const gridElement = document.querySelector(".grid");
const putin = document.querySelector(".putin");
const coronas = document.querySelector(".coronas");
const scoreElement = document.querySelector(".score");
const hidden = document.querySelector(".hidden");
const bulletsCounter = document.querySelector(".bulletsCount");
const start = document.querySelector(".start");
const body = document.querySelector("body");
const resetButtons = document.querySelectorAll(".reset");
const openMusic = document.querySelector(".openMusic");
const crown = document.querySelector(".crown");
const startTitle = document.querySelector(".startTitle");
const popups = document.querySelectorAll(".popup");
const losePopup = popups[0];
const winPopup = popups[1];
const startPopup = popups[2];

let isEnded = false;

let isStarted = false;

let resetOn = false;

let intervalId = null;

let score = 0;
const gridWidth = 15;
const gridHeight = 15;
const cells = [];

let bulletsCount = 40;

let initialPosition = 202;

let xi = new Target(34, "xi-Jinping");

let trump = new Target(36, "trump");

let merkel = new Target(32, "merkel");

let harry = new Target(20, "harry");

let pope = new Target(18, "pope");

let musk = new Target(22, "musk");

let macron = new Target(38, "macron");

let boris = new Target(24, "boris");

let erdogan = new Target(40, "erdogan");

let kim = new Target(26, "kim");

let player = new Player(202, "putin");

let allEnemies = [
  trump,
  xi,
  merkel,
  harry,
  pope,
  musk,
  macron,
  boris,
  erdogan,
  kim,
];

// const bullet = new Bullet();
// creqte qn qrrqy for qll current bullets

let allBullets = [];
for (let i = 0; i < gridWidth * gridHeight; i++) {
  const cell = createCell();
  gridElement.appendChild(cell);
  cells.push(cell);
}

function createCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  return cell;
}

function createBullet() {
  const bulletStartPosition = player.position - gridWidth;
  const bullet = new Bullet(bulletStartPosition, "coronas");
  // put the newly created bullet in the array of all current bullets
  bullet.show();
  allBullets.push(bullet);
}

const bulletsIntervalId = setInterval(() => {
  //player.nextMove();
  allBullets.forEach((bullet) => {
    bullet.nextStep();
  });

  // instead of doing next step and isColliding for just one bullet, do it for every current bullet
  allBullets = allBullets.filter((bullet) => {
    if (!bullet.isAlive) {
      // score += 12;
      console.log(score);
      bullet.remove();
      return false;
    }
    if (bullet.isAlive) {
      if (bullet.isCollidingWithAny(getAliveEnemies())) {
        updateScore();
      }
      return true;
    }
  });
}, 200);

document.addEventListener("keydown", function (event) {
  if (!isStarted) {
    return;
  }
  console.log(event.key, event.keyCode, event.code);

  switch (event.key) {
    case "ArrowLeft":
      if (player.position % gridWidth === 0) {
        break;
      }
      player.move(-1);
      break;
    case "ArrowRight":
      if (player.position % gridWidth === gridWidth - 1) {
        break;
      }
      player.move(+1);
      break;
    case "ArrowUp":
      if (bulletsCount > 0) {
        bulletsCount += -1;
        bulletsCounter.textContent = "coronas = " + bulletsCount;

        createBullet();
      }
      break;
  }
});

player.move(0);

function getAliveEnemies() {
  return allEnemies.filter((x) => x.isAlive);
}

function updateScore() {
  score += 12;
  scoreElement.textContent = "score = " + score;
}
function createInterval() {
  intervalId = setInterval(() => {
    if (!isStarted && resetOn) {
      return;
    }
    // move all bullets
    const aliveEnemies = getAliveEnemies();
    console.log(aliveEnemies);
    // move all players
    aliveEnemies.forEach((x) => {
      if (x.isCollidingWithAny(allBullets)) {
        updateScore();
      }
      x.move(1);
      if (player.position === x.position) {
        player.remove();
        losePopup.classList.remove("hidden");
        isStarted = false;
        isEnded = true;
        body.classList.add("background2");

        clearInterval(intervalId);

        console.log("GAME OVER!");
      }
    });
    // check collisions

    if (getAliveEnemies().length === 0) {
      player.remove();
      winPopup.classList.remove("hidden");
      isStarted = false;
      isEnded = true;
      body.classList.add("background3");

      clearInterval(intervalId);

      console.log("YOU WIN!");
    }

    // remove colliding enemy/bullet pairs
  }, 500);
}
//kim.move(0);

start.addEventListener("click", () => {
  if (isStarted) {
    return;
  }
  isStarted = true;
  startPopup.classList.add("hidden");

  createInterval();
});

const reset = () => {
  score = 0;
  bulletsCount = 40;
  isEnded = false;
  isStarted = true;
  resetOn = false;
  initialPosition = 202;

  player.reset();
  allEnemies.forEach((enemy) => {
    enemy.reset();
  });
  scoreElement.textContent = "score = " + score;
  bulletsCounter.textContent = "coronas = " + bulletsCount;

  createInterval();
  winPopup.classList.add("hidden");
  losePopup.classList.add("hidden");

  body.classList.remove("background3");
  body.classList.remove("background2");
};

resetButtons.forEach((resetButton) =>
  resetButton.addEventListener("click", reset)
);
