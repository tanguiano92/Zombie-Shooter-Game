class Zombie{
 constructor() {
  this.r = 100;
  this.x = width;
  this.y = height - this.r;
 }

  decrease = function(){
    this.r = this.r / 30;
  }

  move() {
   this.x -= 3;
  }

  show() {
   image(zImg, this.x, this.y, this.r, this.r);
  }
}
