
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbin;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);
    

	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2,540, width,10);
	groundSprite.shapeColor=color("yellow")
  
	 

	//Create the Bodies Here.
	dustbin = new Line(1100,200,100,100)
   
  ball = new Paper(200,365,70) 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  dustbin.display()
  
  ball.display()

  drawSprites();
 
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
       
       Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145});
       
     }
   }

