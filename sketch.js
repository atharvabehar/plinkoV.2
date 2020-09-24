var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles ;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var gameState = "play"
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 // particles = new Particle(mouseX,10,10,10);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    
}
 
function draw() {
  background("black");
  
  text("Score : "+score,20,30);

  if (particles !== undefined &&particles !== null&&gameState == "play"){
  particles.display();
  if(particles.body.position.y <600){
      particles != null
  }
  if(particles.body.position.y >600){
    
    if(particles.body.position.x >259 && particles.body.position.x <501){
      score+= 100
      
  
    }else  {
    score+= 500
 
}
particles = null
  }
}
if (count > 5){
  gameState = "end"
}
if (gameState == "end"){
  textSize(100)
  stroke(225,0,0)
  strokeWeight(12)
  text("GAME OVER",width/7,height/2);
  
}
textSize(20)
stroke(225,0,0)
  strokeWeight(2)
  text("500",20,600);
  text("500",100,600);
  text("500",180,600);
  text("100",260,600);
  text("100",340,600);
  text("100",420,600);
  text("100",500,600);
  text("500",580,600);
  text("500",660,600);
  text("500",740,600);
  Engine.update(engine);
  
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
  // }
 
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   
}

function keyPressed() {

 
	  if (keyCode === UP_ARROW &&  gameState !== "end"){
      particles = new Particle(random(20,740), 10,10,10);
       count ++;
    

	}
}
