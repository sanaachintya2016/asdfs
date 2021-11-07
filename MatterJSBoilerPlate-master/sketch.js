
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ball1,ball2,ball3,ball4,ball5
var string1
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(400,200,25);
	ball2 = new Ball(450,200,25);
	ball3 = new Ball(500,200,25);
	ball4 = new Ball(550,200,25);
	ball5 = new Ball(600,200,25);
	ground1 = new Ground(200,100,6000,20)
  string1 = new String(ball1.body, ground1.body, ball1Diameter*2 ,0)
  string2 = new String(ball2.body, ground1.body, ball2Diameter*2 ,0)
  string3 = new String(ball3.body, ground1.body, ball3Diameter*2 ,0)
  string4 = new String(ball4.body, ground1.body, ball4Diameter*2 ,0)
  string5 = new String(ball5.body, ground1.body, ball5Diameter*2 ,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ground1.display();

  string1.display();


  drawSprites();
 
}



