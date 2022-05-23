//const canvas = document.querySelector('canvas')
//const context = canvas.getContext('2d')
//let corVirus = document.querySelector('.corVirus')
const gridElement = document.querySelector(".grid");
const putin = document.querySelector(".putin");
const coronas = document.querySelector(".coronas");
const xiJinping = document.querySelector(".xi-Jinping");
const scoreElement = document.querySelector(".score");

let score = 0;
const gridWidth = 15;
const gridHeight = 15;
const cells = [];

const initialPosition = 202;
let currentPosition = initialPosition;

const xi = new Target(34, "xi-Jinping");

const trump = new Target(36, "trump");

const merkel = new Target(32, "merkel");

const harry = new Target(20, "harry");

const pope = new Target(18, "pope");

const musk = new Target(22, "musk");

const macron = new Target(38, "macron");

const boris = new Target(24, "boris");

const erdogan = new Target(40, "erdogan");

const kim = new Target(26, "kim");

const player = new Player(202, "putin");

const aliveEnemies = [
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
  const bulletStartPosition = currentPosition - gridWidth;
  const bullet = new Bullet(bulletStartPosition, "coronas");
  // put the newly created bullet in the array of all current bullets
  bullet.show();
  allBullets.push(bullet);
}

const bulletsIntervalId = setInterval(() => {
  console.log(allBullets);
  allBullets = allBullets.filter((bullet) => {
    if (!bullet.isAlive) {
      score += 12;
      console.log(score);
      bullet.remove();
      return false;
    }
    if (bullet.isAlive) {
      return true;
    }
  });
  console.log(allBullets, "filtered");
  // instead of doing next step and isColliding for just one bullet, do it for every current bullet
  allBullets.forEach((bullet) => {
    bullet.nextStep();
    aliveEnemies.forEach((enemie) => {
      enemie.isColliding(bullet);

      if (enemie.isColliding(bullet)) {
        score += 10;
      }
    });
  });
}, 200);

document.addEventListener("keydown", function (event) {
  console.log(event.key, event.keyCode, event.code);

  switch (event.key) {
    case "ArrowLeft":
      if (currentPosition % gridWidth === 0) {
        break;
      }
      player.move(currentPosition - 1);
      break;
    case "ArrowRight":
      if (currentPosition % gridWidth === gridWidth - 1) {
        break;
      }
      player.move(currentPosition + 1);
      break;
    case "ArrowUp":
      createBullet();
      break;
  }
});

player.move(0);

let intervalId = null;

let bulletsStock = [];

intervalId = setInterval(() => {
  // move all bullets

  // move all players
  aliveEnemies.forEach((x) => {
    x.move(1);
    if (player.position === x.position) {
      player.remove();

      clearInterval(intervalId);
      console.log("GAME OVER!");
    }

    // if (bullet.position === x.position) {
    //   //x.position.classList.add("explosion");
    //   // score += 10;
    //   // console.log("hey");
    //   // scoreElement.textContent = "Score = " + score;
    //   // x.remove();
    //   bullet.remove();
    //   clearInterval(intervalId);
    //   // bulletsStock.push(bullet);
    // }
  });
  // check collisions
  //testing

  // remove colliding enemy/bullet pairs
}, 500);

//kim.move(0);
