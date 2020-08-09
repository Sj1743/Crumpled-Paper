
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var boxBottom, boxLeft, boxRight;
var crumpledPaper;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, height, width, 10);
	crumpledPaper = new Paper();

	boxBottom = Bodies.rectangle(650, 690, 200, 10, {isStatic:true});
	World.add(world, boxBottom);
	boxLeft = Bodies.rectangle(555, 640, 10, 100, {isStatic:true});
	World.add(world, boxLeft);
	boxRight = Bodies.rectangle(745, 640, 10, 100, {isStatic:true});
	World.add(world, boxRight);

	//create sprites for 'box'
	boxBottomBody = createSprite(650, 690, 200, 10);
	boxBottomBody.shapeColor = "white";
	boxLeftBody = createSprite(555, 640, 10, 100);
	boxLeftBody.shapeColor = "white";
	boxRightBody = createSprite(745, 640, 10, 100);
	boxRightBody.shapeColor = "white";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  crumpledPaper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position, {x: 20, y:-12});
	}
}
