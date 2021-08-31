var bg,sleep,brush,gym,eat,bath,move;
var astronaut;

function preload(){
  bg= loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
 // gym=loadAnimation();
  //eat=loadAnimation();
    //bath=loadAnimation();
      //move=loadAnimation();
    
  
}
function setup() {
  createCanvas(800,400);
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
 
}

function draw() {
  background(bg);  
  drawSprites();
  textSize(20);
  fill("white")
  text("Instructions:",20,35);
  text(15);
  text("Up Arrow=Brushing",20,55);
  text("Down Arrow=Gyming",20,70);
  text("Left Arrow=Eating",20,85);
  text("Right Arrow=Bathing",20,100);
  text("m Arrow=Moving",20,115);





}