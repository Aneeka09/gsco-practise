var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  car = createSprite(70,110,110,120); 
  wall = createSprite(30,170,30,height/2)
}





function draw() {
  background(255,255,255);
  speed = random(100,90);
  weight = random(400,1500);
  car.velocityX=speed;
  wall.shapeColor=color(80,80,80);

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocity=0;
    var deformation=0.7 * weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}