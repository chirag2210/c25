const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;

var dustbinImg
var paperImg

function preload(){
//find the bug in the below code
	dustbinImg = loadImage("dustbin.png")
    paperImg = loadImage("paper.png")
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}

	ball = Bodies.circle(260,100,radius/2.6,ball_options);
	World.add(world,ball);

	ground=new Ground(width/2,670,width,20);
	

	Engine.run(engine);
  
}


function draw() {
	background(200);
	rectMode(CENTER);


	ground.display();

	
	imageMode(CENTER);
		//use image() command to add paper image to the ball
     image(paperImg,ball.position.x,ball.position.y,radius,radius);

	// use image() command to add dustbin image in the canvas.
	image(dustbinImg,1300,610,100,100);
	

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
    
  	}
}
