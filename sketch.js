var fixedRect,movingRect;
var object1, object2, object3, object4;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

  object1 = createSprite(200,100,50,50);
  object2 = createSprite(100,300,50,50);
  object3 = createSprite(100,200,50,50);
  object4 = createSprite(200,300,50,50);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,object1)){
      movingRect.shapeColor="red";
      object1.shapeColor="red";
  }

  else{
    
    movingRect.shapeColor="green";
    object1.shapeColor="green";
  
  }

  drawSprites();
}
