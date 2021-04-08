
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, stone, tree, ground;
var mango1, mango2, mango3;

function preload()
{
	boy = loadImage("Images/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200, 300, 20, 30);
	stone = new Stone(210, 315, 5, 5);
	constraint.create(boy, stone);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  drawSprites();
 
}

function mouseDragged() {
	if (mouse.x && mouse.y  != stone.x && stone.y ){
		
	}
}




