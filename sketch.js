
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground;
var box1,box2,box3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper();
	ground = new Ground();
	 box1 = new DustBin(390,650,200,20);
	 box2 = new DustBin(300,610,20,100);
	 box3 = new DustBin(480,610,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  function keyPressed();
  paper.display();
  ground.display();
  box3.display();
  box2.display();
  box1.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.positon,{x:85,y:-85});
	}

}



