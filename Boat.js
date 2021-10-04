class Boat {
  constructor(x, y, width, height, boatPos) {
    this.animation = boat.animation;
    this.speed = 0.07;
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;

    this.boatPosition = boatPos;
    this.isBroken = false;

    World.add(world, this.body);
  }
  animate() {
    this.speed += 0.05;
  }
  

  remove(index) {
  this.animation = brokenBoatAnimation;
  this.speed = 0.05;
  this.width = 300;
  this.height = 300;
  this.isBroken = true;
  setTimeout(() => {
  Matter.World.remove(world, boats[index].body);
  delete boats[index];
  }, 2000);
}

  display(){
    var angle = this.body.angle;
    var pos = this.body.position;
  
    push();{
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, this.boatPosition, this.width, this.height);
    pop();
}
  }
}