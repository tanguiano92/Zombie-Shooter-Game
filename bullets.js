function Bullets(x, y){
  this.x = x;
  this.y = y;
  this.r = 6;
  this.toDelete = false;

  this.show = function (){
    noStroke();
    fill(255, 215, 0);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.evaporate = function(){
    this.toDelete = true;
  }

  this.hits = function(zombies){
    var d = dist(this.x, this.y, zombies.x, zombies.y);
    if (d < this.r + zombies.r) {
    return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.x = this.x + 3;
  }
}
