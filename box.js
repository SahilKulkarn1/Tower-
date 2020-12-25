class Box {
    constructor(x,y,width,height,color) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.color=color;
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };