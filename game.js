const gridElement = document.querySelector(".grid");
const putin = document.querySelector(".putin");
const coronas = document.querySelector(".coronas");
const xiJinping = document.querySelector(".xi-Jinping");
const scoreElement = document.querySelector(".score");
const gameOverUnDisplay = document.querySelector(".nothing");
const winDisplay = document.querySelector(".nothingWin");
const winDance = document.querySelector(".noClass");
const winMacron = document.querySelector(".noClass2");
const bulletsCounter = document.querySelector(".bulletsCount");
const start = document.querySelector(".start");
const body = document.querySelector("body");
const resetButton = document.querySelector("button");
const openMusic = document.querySelector(".openMusic");
const crown = document.querySelector(".crown");
const startTitle = document.querySelector(".startTitle");
const startDiv = document.querySelector(".startDiv");

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
  console.log("im being called");
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
        gameOverUnDisplay.classList.add("gameOver");
        winMacron.classList.remove("noClass2");
        winMacron.classList.add("winMacron");
        isStarted = false;
        isEnded = true;
        body.classList.add("background2");
        if (isStarted) {
          resetButton.classList.add("isStarted");
          resetButton.classList.remove("reset");
        }
        if (isEnded) {
          resetButton.classList.add("reset");
          resetButton.classList.remove("isStarted");
        }

        clearInterval(intervalId);

        console.log("GAME OVER!");
      }
    });
    // check collisions

    if (getAliveEnemies().length === 0) {
      player.remove();

      winDisplay.classList.add("win");
      winDance.classList.add("winDance");
      isStarted = false;
      isEnded = true;
      body.classList.add("background3");
      if (isStarted) {
        resetButton.classList.add("isStarted");
        resetButton.classList.remove("reset");
      }
      if (isEnded) {
        resetButton.classList.add("reset");
        resetButton.classList.remove("isStarted");
      }

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
  start.classList.add("isStarted");
  startDiv.classList.remove("startDiv");
  startDiv.classList.add("isStarted");

  createInterval();
});

resetButton.addEventListener("click", () => {
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
  winDisplay.classList.remove("win");
  winDance.classList.remove("winDance");
  resetButton.classList.add("isStarted");
  resetButton.classList.remove("reset");
  body.classList.remove("background3");

  gameOverUnDisplay.classList.remove("gameOver");
  winMacron.classList.add("noClass2");
  winMacron.classList.remove("winMacron");

  body.classList.remove("background2");
});
