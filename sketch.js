const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
var slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18
function preload() {
   
}
function setup(){
  var canvas = createCanvas(1800,600);
  engine = Engine.create();
  world = engine.world;
  stand1 = new Ground(280,500,150,20)
  stand2 = new Ground(710,300,150,20)
   //stand 1 
  box1 = new Box(250,480,20,20,"blue")
  box2 = new Box(270,480,20,20,"blue")
  box3 = new Box(290,480,20,20,"blue")
  box4 = new Box(310,480,20,20,"blue")
  box5 = new Box(280,480,20,20,"blue")
  box6 = new Box(260,460,20,20,"green")
  box7 = new Box(280,460,20,20,"green")
  box8 = new Box(300,460,20,20,"green")
  box9 = new Box(280,440,20,20,"pink")
  //stand 2
  box10 = new Box(670,280,20,20,"cyan")
  box11 = new Box(690,280,20,20,"cyan")
  box12 = new Box(710,280,20,20,"cyan")
  box13 = new Box(730,280,20,20,"cyan")
  box14 = new Box(750,280,20,20,"CYAN")
  box15 = new Box(700,260,20,20,"lime")
  box16 = new Box(720,260,20,20,"lime")
  box17 = new Box(735,260,20,20,"lime")
  box18 = new Box(715,240,20,20,"red")

  poly = new poly(50,200,100);
  slingshot = new SlingShot(poly.body,{x:100,y:200})
}

function draw(){
  background("gray");
  Engine.update(engine);
  stand1.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display()
  box8.display()
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display()
  box17.display()
  box18.display();
  slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
