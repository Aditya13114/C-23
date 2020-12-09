const Engine = Matter.Engine;//namespace
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine , world;
var ground;
var box1;
var box2;


function setup() {
  createCanvas(400,400);

engine = Engine.create();
  world = engine.world;
  var options = {isStatic : true}
  
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);
  console.log(ground);
  
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);


  

}


function draw() {
  background("green"); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
 
  box1.display();
  box2.display();

  

}