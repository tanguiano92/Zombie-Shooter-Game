
let goth;
let bullets = [];
let zombies = [];
let gImg;
let zImg;
let mySound;

var bgImg;
var x1 = 0;
var x2;

var scrollSpeed = 3;


function resetGame() {
    lady = new Goth();
}

// civilized_villians sound by Eric Taylor
function preload() {
  gImg = loadImage('images/Goth Dude-1.png.png');
  pImg = loadImage('images/zombie-2.png.png');
  bgImg = loadImage("images/Zombie Game Environment.jpg");
  mySound = loadSound('audio/music.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  resetGame();

  x2 = width;

  mySound.setVolume(0.1);
  mySound.play();
  mySound.loop();
}

function draw() {
background(0);

  image(bgImg, x1, 0, width, height);
  image(bgImg, x2, 0, width, height);

  x1 -= scrollSpeed;
  x2 -= scrollSpeed;

  if (x1 < -width) {
    x1 = width;
  }
  if (x2 < -width) {
    x2 = width;
  }


  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].update();
    for (var j = 0; j < zombies.length - 1; j++) {
      if (bullets[i].hits(zombies[j])) {
        zombies[j].decrease();
        bullets[i].evaporate();
        console.log('Back up!');
      }
    }
  }

  if (random(1) < 0.01) {
    zombies.push(new Zombie());
  }

  for (var i = bullets.length - 1; i >= 0; i--) {
    bullets[i].update();
    bullets[i].show();
    if (bullets[i].toDelete) {
      bullets.splice(i, 1);
    }
  }

  for (let z of zombies) {
    z.move();
    z.show();
    if (goth.hits(p)) {
      console.log('Game over!');
    if (goth.intersects(p)) {
      resetGame();
    }
    }
  }

  goth.show();
  goth.move();

}

function keyPressed() {

  if (keyCode === UP_ARROW) {
    goth.jump();
  } else if (key === ' ') {
    var bullet = new Bullet(goth.x + 15, goth.y + 20);
    bullets.push(bullet);
  }
}
