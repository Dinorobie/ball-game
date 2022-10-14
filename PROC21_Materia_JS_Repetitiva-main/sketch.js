
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,groundOb,left,right;
var world;
var radius =40;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}


	

	//crear los cuerpos aquí.
	ball=Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	groundOb=new ground(width/2,670,width,20);
	left = new ground(1100,600,20,120);
	right = new ground(1350,600,20,120);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  groundOb.display();
  left.display();  
  right.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  
	}
}

