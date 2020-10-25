
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var servivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
    monkey = createSprite(80,215,20,20);
    monkey.addAnimation("moving",monkey_running);
    monkey.scale = 0.1

    ground = createSprite(400,280,900,20);
    ground.velocityX = -4;
    
    
   
}


function draw() {
  createCanvas(600,300)
  background(225);
   stroke("white");
   textSize = 20;
   fill("white");
  text("Score :"+score,400,200);
  
  stroke("black");
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time :"+survivalTime,100,50)
  
    if(ground.x<0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space")){
      monkey.velocityY = -15;
    }
    
    monkey.velocityY = monkey.velocityY + 1;
    monkey.collide(ground);
    
  spawnBanana();
      
    drawSprites();
 }
 function spawnBanana() {
   if (frameCount % 100 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
   }
 }

  



