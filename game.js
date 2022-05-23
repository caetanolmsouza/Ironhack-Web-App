//const canvas = document.querySelector('canvas')
//const context = canvas.getContext('2d')
//let corVirus = document.querySelector('.corVirus')

const gridElement = document.querySelector(".grid");
const putin = document.querySelector(".putin");
const coronas = document.querySelector(".coronas");
const xiJinping = document.querySelector(".xi-Jinping");

const gridWidth = 15;
const gridHeight = 15;
const cells = [];

let score = 0;

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
  bullet.show();
  const intervalId = setInterval(() => {
    bullet.nextStep(intervalId);
    trump.isColliding(bullet);
    xi.isColliding(bullet);
    merkel.isColliding(bullet);
    harry.isColliding(bullet);
    pope.isColliding(bullet);
    musk.isColliding(bullet);
    macron.isColliding(bullet);
    boris.isColliding(bullet);
    erdogan.isColliding(bullet);
    kim.isColliding(bullet);
  }, 400);
}

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

setInterval(() => {
  // move all bullets

  // move all players
  aliveEnemies.forEach((x) => {
    x.move(1);
  });
  // check collisions

  // remove colliding enemy/bullet pairs
}, 500);

//kim.move(0);