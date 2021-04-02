class Goth {
 constructor(){
   this.r = 70 ;
   this.x = 50;
   this.y = height - this.r;
   this.vy = 0;
   this.gravity = 2;
   }

  jump() {
   if (this.y == height - this.r) {
       this.vy = -30;
   }
  }

  hits(zombies) {
   return collideRectRect(this.x, this.y, this.r, this.r, zombies.x, zombies.y, zombies.r, zombies.r);
  }

  move() {
   this.y += this.vy;
   this.vy += this.gravity;
    this.y = constrain(this.y, 0, height-this.r);
  }

  show() {
   image(gImg, this.x, this.y, this.r, this.r);

  }
}
