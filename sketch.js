function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  button = createButton("Click to Blow") 
  button.position(width/2,height-100) 
  button.class("blowButton");
  button.mousepressed(blow);
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.5});
}

if (collide(fruit,bunny,80)===true)
{
  remove_rope();
  bunny.visible = false;
  World.remove(engine.World,fruit);
  fruit = null;
  bunny.changeAnimation("eating");
}