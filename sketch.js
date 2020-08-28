
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin;
var boxBottom, boxLeft, boxRight;
var crumpledPaper;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	crumpledPaper = new Paper();

	ground = new Ground(400, 700, 800, 20);

	boxBottom = new boxSide(700, 630, 100, 10);
	boxLeft = new boxSide(655, 625, 10, 125);
	boxRight = new boxSide(745, 625, 10, 125);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("grey");

  dustbin = loadImage("dustbin.png");
  dustbin.scale = 0.42;
  World.add(world, dustbin);

  ground.display();
  crumpledPaper.display();

  boxBottom.show();

}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position, {x: 60, y:-55});
	}
}
