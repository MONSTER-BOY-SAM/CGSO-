var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1700,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "red";

  wall = createSprite(1500,200,50,200);
  wall.shapeColor = "white";

  speed = random(55,90);
  car.velocityX = speed;
  weight = random(400,1500);

}

function draw() {
  background("black");  

  if(wall.x - car.x < (car.width/2 + wall.width/2)){

    deformation = (0.5*weight*speed*speed)/22500
    car.velocityX = 0;
    if(deformation > 180){

      car.shapeColor = "red"

    }

    else if(deformation < 180 && deformation>100){

      car.shapeColor = "yellow"

    }

    else {

      car.shapeColor = "green"

    }

  }

  drawSprites();
}