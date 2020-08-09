
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin, dustbinImage;
var boxBottom, boxLeft, boxRight;
var crumpledPaper;


function preload(){
	dustbinImage = loadImage("dustbin.png");
}


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, height, width, 10);
	crumpledPaper = new Paper();

	boxBottom = Bodies.rectangle(700, 690, 100, 10, {isStatic:true});
	World.add(world, boxBottom);
	boxLeft = Bodies.rectangle(655, 625, 10, 125, {isStatic:true});
	World.add(world, boxLeft);
	boxRight = Bodies.rectangle(745, 625, 10, 125, {isStatic:true});
	World.add(world, boxRight);

	boxBottomBody = createSprite(700, 690, 100, 10);
	boxBottomBody.shapeColor = "white";
	boxLeftBody = createSprite(655, 625, 10, 125);
	boxLeftBody.shapeColor = "white";
	boxRightBody = createSprite(745, 625, 10, 125);
	boxRightBody.shapeColor = "white";

	dustbin = createSprite(700, 630, 0, 0);
	dustbin.addImage(dustbinImage);
	dustbin.scale = 0.42;	

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("grey");

  drawSprites();

  ground.display();
  crumpledPaper.display();
  
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position, {x: 60, y:-55});
	}
}
