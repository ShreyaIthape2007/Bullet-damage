var bullet, wall,weight,speed,thick
function setup() {
  createCanvas(1600,400);

  bullet=createSprite(400, 200, 50, 50);
  wall=createSprite(1500,200,50,1600)
  weight=random(30,52);
  speed=random(223,321);
  thick=random(22,83)

}

function draw() {
  background(255,255,255); 
  background('black')
  
  bullet.shapeColor='white';
  bullet.weight=weight;
  bullet.velocityX=speed;
  
  wall.shapeColor=(80,80,80);
  
  bullet.setCollider("rectangle",50,0,bullet.width,bullet.height)
  bullet.debug=true;


  if(wall.x-bullet.x<= (0.5 * bullet.width + 0.5 * wall.width)){
    //bullet.shapeColor='blue';
    bullet.velocityX=0;
    var damage= (0.5 * bullet.weight * speed * speed )/(thick*thick*thick)
    if (damage>10){
      bullet.shapeColor='red'
    }
   
    else{
      bullet.shapeColor='green'
    }

  }



  




  drawSprites();
}