var shape1,shape2;

function setup() {
  createCanvas(800,600);
  shape1 =  createSprite(600, 200, 80, 100);
  shape2 =  createSprite(100, 200, 50, 50); 
  shape1.velocityX = -3;
shape2.velocityX = 4;

}

function draw() {
  background(255,255,255);  
//shape2.x = World.mouseX;
//shape2.y = World.mouseY;
//console.log(shape2.x);

/*if(keyDown("up")){
  shape2.velocityY = -3;
  shape2.velocityX = 0;

}

if(keyDown("down")){
  shape2.velocityY = 3;
  shape2.velocityX = 0;

}

if(keyDown("left")){
  shape2.velocityX = -3;
  shape2.velocityY = 0;

}

if(keyDown("right")){
  shape2.velocityX = 3;
  shape2.velocityY = 0;

}*/

if(shape1.x - shape2.x < shape1.width/2 + shape2.width/2 &&
   shape2.x - shape1.x < shape1.width/2 + shape2.width/2 &&
   shape1.y - shape2.y < shape1.height/2 + shape2.height/2 &&
   shape2.y - shape1.y < shape1.height/2 + shape2.height/2)
   

{
shape1.shapeColor = "red";
shape2.shapeColor = "purple";

}
else
{
  shape2.shapeColor = "yellow";
  shape1.shapeColor = "yellow";
}

if(shape1.x - shape2.x < shape1.width/2 + shape2.width/2 &&
  shape2.x - shape1.x < shape1.width/2 + shape2.width/2 )
{
 shape1.velocityX = -1*shape1.velocityX;  
 shape2.velocityX = -1*shape2.velocityX;  


}
if(  shape1.y - shape2.y < shape1.height/2 + shape2.height/2 &&
  shape2.y - shape1.y < shape1.height/2 + shape2.height/2)
{
  shape1.velocityY = -1*shape1.velocityY;
  shape2.velocityY = -1*shape2.velocityY;

}
  drawSprites();
}