
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var Ground;
var SurvivalTime;
var obstacle;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png", "sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);

  
  monkey = createSprite(80,315,20,50);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  Ground = createSprite(400,350,900,10);
  Ground.velocityX = -4;
  Ground.x=Ground.width/2;
  console.log(Ground.X);
  
  

  BananaGroup = new Group();
  ObstacleGroup = new Group();
  

 
 SurvivalTime = 0;
}


function draw() {
  background(180);
  //displaying survival time
   stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:" + SurvivalTime,100,50);  
  
   
  
  if (Ground.x < 0){
      Ground.x = Ground.width/2;
    }
      

    
  
  //stop monkey from falling down
  monkey.collide(Ground);
  
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
    
  Ground.velocityX = 0;
  
  
  SpawnBanana();
  SpawnObstacle();  
  
  
  drawSprites();
}

function SpawnBanana(){
   if(World.frameCount % 80 === 0){
      position= Math.round(random(1,2));
      Banana = createSprite(400,200,20,20);
      Banana.addImage(bananaImage);
      Banana.scale = 0.1;
       
      Banana.y=Math.round(random(120,200))  
  
      Banana.velocityX = -7;
      Banana.lifetime = 100;
     
      BananaGroup.add(Banana);
    
     }
   }
  

function SpawnObstacle(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + SurvivalTime/100);
   obstacle.addImage(obstacleImage);   
   
     obstacle.y=315;
      
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;    
    
    
    
    } 
  }
  
  
  
  
  



