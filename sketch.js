const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball;
var rect;
var square;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var ball_options = {
		restitution : 0.95,
		frictionAir : 0.01
	  }
	
	  var rect_options = {
		isStatic : true
	  }
	  var square_options ={
		  restitution : 0.85,
	  }
	  ball = Bodies.circle(100,10,20,ball_options);
	  World.add(world,ball);
	
	  ground = Bodies.rectangle(200,390,400,20,rect_options);
	  World.add(world,rect);
	  ground = Bodies.rectangle(200,390,20,20,square_options);
	  World.add(world,square);

	Engine.run(engine);
    wall=Bodies.rectangle(300,200,200,20,rect_options);
  World.add(world,wall);
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(225);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,rect.position.y,400,20);
  square(ground.position.x,square.position.y,20,20);
  drawSprites();
 
}



