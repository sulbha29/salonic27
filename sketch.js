
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof, bob1, bob2, bob3, bob4, bob5, chain1, chain2, chain3, chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof = new Roof(400, 100, 300, 50);
	bob1 = new Bob(320, 450);
	bob2 = new Bob(360, 450);
	bob3 = new Bob(400, 450);
	bob4 = new Bob(440, 450);
	bob5 = new Bob(480, 450);
	chain1 = new Chain(bob1.body, roof.body, -100, 0);
	chain2 = new Chain(bob2.body, roof.body, -60, 0);
	chain3 = new Chain(bob3.body, roof.body, 0, 0);
	chain4 = new Chain(bob4.body, roof.body, 40, 0);
	chain5 = new Chain(bob5.body, roof.body, 80, 0);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
   
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40,y:-30});
   
	}
  }


