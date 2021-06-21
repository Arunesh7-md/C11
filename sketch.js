var Ship;
var sea;
var seaImg;
var shipImg;

function preload(){
 seaImg = loadImage("sea.png")
 shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  
  Ship = createSprite(200,360,20,20)
  Ship.addAnimation("moving",shipImg)
  Ship.scale = 0.3
  sea = createSprite(200,390,400,20)
  sea.addAnimation("waves",seaImg)
  sea.scale = 0.1

}

function draw() {
  background("blue");

  Ship.addAnimation(shipImg)
  sea.addAnimation(seaImg)


  Ship.collide(sea)

  sea.velocityX = -4 

  if (sea.x <0){
     sea.x = 200
  }
  
 
  drawSprites();
  
}