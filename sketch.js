let goth;
let bullets = [];
let zombies = [];
let gImg;
let zImg;

var bgImg;
var x1 = 0;
var x2;

var scrollSpeed = 3;




function preload() {
  gImg = loadImage('images/Goth Dude-1.png.png');
  zImg = loadImage('images/zombie-2.png.png');
  bgImg = loadImage("images/Zombie Game Environment.png");
}

function setup() {
  createCanvas(800, 400);
  goth = new Goth();

  x2 = width;
}

function draw() {
   background(255);

  image(bgImg, x1, 0, width, height);
  image(bgImg, x2, 0, width, height);

  x1 -= scrollSpeed;
  x2 -= scrollSpeed;

  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }


   for (var i = 0; i < bullets.length; i++){
  bullets[i].show();
  bullets[i].move();
      for (var j = 0; j < zombies.length; j++) {
  if (bullets[i].hits(zombies[j])) {
      zombies[j].decrease();
      bullets[i].evaporate();
      console.log('Back up!');
}
  }
   }

  if (random(1) < 0.005) {
   zombies.push(new Zombies());
  }

  for (let z of zombies) {
    z.move();
    z.show();
    if (goth.hits(z)) {
      console.log('Game over!');
    }
  }

  goth.show();
  goth.move();

}

  for (var i = bullets.length-1; i >= 0; i--) { if (bullets[i].toDelete) {
      bullets.splice(i, 1);
    }

  }

function keyPressed(){

  if (keyCode === UP_ARROW) {
     goth.jump();
   } else if (key === ' '){
    var bullet = new Bullet(goth.x+15, goth.y+20);
    bullets.push(bullet);
  }
}
