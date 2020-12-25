class poly {
  constructor(x,y,radius) {
      
      this.body = Bodies.circle(x,y,radius);
     // this.image = loadImage("sprites/polygon.png");
      World.add(world,this.body);
     
    }
  
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    //imageMode(CENTER);
   // image(this.image, this.body.position.x, this.body.position.y,40,40);
    pop();
  }
};

  