const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function preload(){

}

function setup() {
  createCanvas(480, 800);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 790, 500, 25);
  
  for (var d = 0; d <= width; d = d + 80) {
    divisions.push(new Divisions(d, height - divisionHeight/2, 10, divisionHeight));
  }

  for (var l = 40; l <= width; l = l + 50)
  {
    plinkos.push(new Plinko(l, 75))
  }




  }


function draw() {
  background(0, 0, 0); 
  Engine.update(engine);
  for (var d = 0; d < divisions.length; d++)
  {
    divisions[d].display();
  }

  for (var l = 0; l < plinkos.length; l++)
  {
    plinkos[l].display();
  }
  

  ground.display();
  drawSprites();
}