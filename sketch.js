// namespace - short name 
//constant 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,box;
var ground,ball;


function setup() {
  var canvas = createCanvas(400,400);
  // instance of physics engine 
  // assigned to engine variable
  engine = Engine.create();

  // world variable 

  world = engine.world;

  var options = {
    isStatic:false
  }

  box = Bodies.rectangle(200,100,50,50, options);
  World.add(world , box);

}

function draw() {
  background("cyan");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(box.position.x, box.position.y, 50, 50);

}